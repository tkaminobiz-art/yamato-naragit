import { Property } from '@/data/properties';
import { getAllBuildingPlans, BuildingPlan } from '@/data/building_plans';

export interface ValidationError {
    propertyId: string;
    propertyName: string;
    field: string;
    message: string;
    severity: 'error' | 'warning';
}

/**
 * 物件データを検証し、エラーがあれば配列で返す
 */
export function validateProperty(property: Property): ValidationError[] {
    const errors: ValidationError[] = [];
    const validPlanIds = getAllBuildingPlans().map((p: BuildingPlan) => p.id);

    // 必須フィールドのチェック
    if (!property.id || property.id.trim() === '') {
        errors.push({
            propertyId: property.id || '(ID未設定)',
            propertyName: property.name,
            field: 'id',
            message: 'IDが設定されていません',
            severity: 'error'
        });
    }

    if (!property.name || property.name.trim() === '') {
        errors.push({
            propertyId: property.id,
            propertyName: property.name || '(名前未設定)',
            field: 'name',
            message: '物件名が設定されていません',
            severity: 'error'
        });
    }

    // 価格の整合性チェック
    if (property.priceNumeric < 0) {
        errors.push({
            propertyId: property.id,
            propertyName: property.name,
            field: 'priceNumeric',
            message: '価格は0以上である必要があります（成約済みの場合は0を設定）',
            severity: 'error'
        });
    }

    // 土地面積のチェック
    if (property.landSizeNumeric <= 0) {
        errors.push({
            propertyId: property.id,
            propertyName: property.name,
            field: 'landSizeNumeric',
            message: '土地面積は0より大きい値である必要があります',
            severity: 'error'
        });
    }

    // 建物プランIDの存在チェック
    if (property.recommendedPlanIds && property.recommendedPlanIds.length > 0) {
        for (const planId of property.recommendedPlanIds) {
            if (!validPlanIds.includes(planId)) {
                errors.push({
                    propertyId: property.id,
                    propertyName: property.name,
                    field: 'recommendedPlanIds',
                    message: `存在しないプランID "${planId}" が指定されています。有効なID: ${validPlanIds.join(', ')}`,
                    severity: 'error'
                });
            }
        }
    }

    // 建築可能面積のチェック
    if (property.maxBuildingSize <= 0) {
        errors.push({
            propertyId: property.id,
            propertyName: property.name,
            field: 'maxBuildingSize',
            message: '建築可能面積は0より大きい値である必要があります',
            severity: 'error'
        });
    }

    // 建ぺい率・容積率のチェック（警告レベル）
    if (property.buildingCoverage && (property.buildingCoverage <= 0 || property.buildingCoverage > 100)) {
        errors.push({
            propertyId: property.id,
            propertyName: property.name,
            field: 'buildingCoverage',
            message: '建ぺい率は1〜100の範囲で設定してください',
            severity: 'warning'
        });
    }

    if (property.floorAreaRatio && property.floorAreaRatio <= 0) {
        errors.push({
            propertyId: property.id,
            propertyName: property.name,
            field: 'floorAreaRatio',
            message: '容積率は0より大きい値である必要があります',
            severity: 'warning'
        });
    }

    // IDの重複チェックは validateAllProperties で実施

    return errors;
}

/**
 * 全物件データを検証
 */
export function validateAllProperties(properties: Property[]): ValidationError[] {
    const allErrors: ValidationError[] = [];

    // 各物件の個別検証
    for (const property of properties) {
        const propertyErrors = validateProperty(property);
        allErrors.push(...propertyErrors);
    }

    // IDの重複チェック
    const idMap = new Map<string, number>();
    for (const property of properties) {
        const count = idMap.get(property.id) || 0;
        idMap.set(property.id, count + 1);
    }

    for (const [id, count] of Array.from(idMap.entries())) {
        if (count > 1) {
            const duplicateProperty = properties.find(p => p.id === id);
            allErrors.push({
                propertyId: id,
                propertyName: duplicateProperty?.name || '(不明)',
                field: 'id',
                message: `IDが重複しています（${count}件）`,
                severity: 'error'
            });
        }
    }

    return allErrors;
}

/**
 * エラーがあるかチェック
 */
export function hasErrors(errors: ValidationError[]): boolean {
    return errors.some(e => e.severity === 'error');
}

/**
 * 警告のみかチェック
 */
export function hasOnlyWarnings(errors: ValidationError[]): boolean {
    return errors.length > 0 && errors.every(e => e.severity === 'warning');
}
