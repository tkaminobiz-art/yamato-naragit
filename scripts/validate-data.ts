import { properties } from '../src/data/properties';
import { validateAllProperties, hasErrors, hasOnlyWarnings } from '../src/utils/propertyValidator';

console.log('🔍 物件データを検証中...\n');

try {
    const errors = validateAllProperties(properties);

    if (errors.length === 0) {
        console.log('✅ すべての物件データが正常です！');
        console.log(`   検証した物件数: ${properties.length}件\n`);
        process.exit(0);
    } else {
        const errorCount = errors.filter(e => e.severity === 'error').length;
        const warningCount = errors.filter(e => e.severity === 'warning').length;

        if (hasErrors(errors)) {
            console.error(`❌ ${errorCount}件のエラーが見つかりました:\n`);
        }

        if (hasOnlyWarnings(errors)) {
            console.warn(`⚠️  ${warningCount}件の警告があります:\n`);
        }

        // エラーと警告を分けて表示
        const errorList = errors.filter(e => e.severity === 'error');
        const warningList = errors.filter(e => e.severity === 'warning');

        if (errorList.length > 0) {
            console.error('【エラー】');
            errorList.forEach((error, index) => {
                console.error(`${index + 1}. [${error.propertyId}] ${error.propertyName}`);
                console.error(`   フィールド: ${error.field}`);
                console.error(`   内容: ${error.message}\n`);
            });
        }

        if (warningList.length > 0) {
            console.warn('【警告】');
            warningList.forEach((warning, index) => {
                console.warn(`${index + 1}. [${warning.propertyId}] ${warning.propertyName}`);
                console.warn(`   フィールド: ${warning.field}`);
                console.warn(`   内容: ${warning.message}\n`);
            });
        }

        // エラーがある場合は終了コード1、警告のみの場合は0
        if (hasErrors(errors)) {
            console.error('❌ エラーを修正してから再度実行してください。\n');
            process.exit(1);
        } else {
            console.log('✅ エラーはありません。警告は確認してください。\n');
            process.exit(0);
        }
    }
} catch (error) {
    console.error('❌ 検証中にエラーが発生しました:');
    console.error(error);
    process.exit(1);
}
