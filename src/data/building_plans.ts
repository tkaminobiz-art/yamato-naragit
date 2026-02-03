/**
 * 建物プラン（花・風シリーズ）のマスターデータ
 */

export interface BuildingPlan {
    id: string;
    series: '花' | '風';
    tsubo: number; // 坪数
    layout: string; // 3LDK, 4LDK等
    basePrice: number; // 基本価格（万円）
    floorArea: number; // 基礎面積（㎡）
    features: string[]; // 特徴
    imageUrl?: string; // 完成予想図
    description?: string; // 説明文
}

/**
 * 建物プランのマスターデータ
 */
export const buildingPlans: BuildingPlan[] = [
    {
        id: 'hana-28-3ldk',
        series: '花',
        tsubo: 28,
        layout: '3LDK',
        basePrice: 2080,
        floorArea: 50,
        features: [
            'コンパクトで機能的',
            '子育て世代に最適',
            '光熱費を抑えた設計'
        ],
        description: '家族3-4人にぴったりの、使い勝手の良い間取りです。'
    },
    {
        id: 'kaze-30-4ldk',
        series: '風',
        tsubo: 30,
        layout: '4LDK',
        basePrice: 2280,
        floorArea: 63,
        features: [
            'ゆとりの4部屋',
            '二世帯住宅にも対応',
            '収納スペース充実'
        ],
        description: '広々とした空間で、家族それぞれのプライバシーを確保できます。'
    },
    {
        id: 'hana-31-4ldk',
        series: '花',
        tsubo: 31,
        layout: '4LDK',
        basePrice: 2280,
        floorArea: 92,
        features: [
            '広い基礎面積',
            '平屋プランも可能',
            'バリアフリー対応'
        ],
        description: '大きな敷地を活かした、ゆったりとした住まいです。'
    }
];

/**
 * すべての建物プランを取得
 */
export function getAllBuildingPlans(): BuildingPlan[] {
    return buildingPlans;
}


/**
 * IDから建物プランを取得
 */
export function getBuildingPlanById(id: string): BuildingPlan | undefined {
    return buildingPlans.find(plan => plan.id === id);
}

/**
 * シリーズから建物プランを取得
 */
export function getBuildingPlansBySeries(series: '花' | '風'): BuildingPlan[] {
    return buildingPlans.filter(plan => plan.series === series);
}

/**
 * 坪数範囲から建物プランを取得
 */
export function getBuildingPlansByTsuboRange(minTsubo: number, maxTsubo: number): BuildingPlan[] {
    return buildingPlans.filter(plan => plan.tsubo >= minTsubo && plan.tsubo <= maxTsubo);
}

/**
 * 月々の支払い額を計算
 * @param totalPrice 総額（万円）
 * @param years 返済期間（年）
 * @param annualRate 年利（%）
 * @returns 月々の支払額（万円）
 */
export function calculateMonthlyPayment(
    totalPrice: number,
    years: number = 35,
    annualRate: number = 1.5
): number {
    const monthlyRate = annualRate / 100 / 12; // 月利
    const months = years * 12; // 総返済回数

    if (monthlyRate === 0) {
        return totalPrice / months;
    }

    // 月々支払額 = 借入額 × (月利 × (1 + 月利)^返済回数) / ((1 + 月利)^返済回数 - 1)
    const monthlyPayment = totalPrice * (monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

    return Math.round(monthlyPayment * 100) / 100; // 小数点第2位まで
}

/**
 * 土地と建物の総額を計算
 */
export function calculateTotalPrice(landPrice: number, buildingPrice: number): number {
    return landPrice + buildingPrice;
}
