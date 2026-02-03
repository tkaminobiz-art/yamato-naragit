import { Property, PROPERTY_STATUSES, CONSTRUCTION_CONDITIONS } from '@/data/properties';

/**
 * 新規物件追加用のテンプレート
 * 
 * このテンプレートをコピーして新規物件を追加してください。
 * ← の矢印がついているフィールドは必ず変更が必要です。
 * 
 * 使用方法:
 * 1. このオブジェクトをコピーして、properties.ts の properties 配列に追加
 * 2. 各フィールドを実際のデータに置き換え
 * 3. `npm run validate:data` を実行して検証
 */
export const propertyTemplate: Property = {
    // ========== 基本情報 ==========
    id: 'prop-XXX', // ← 変更必須: 一意のIDを設定（例: 'prop-15', 'prop-ikoma-2024-01'）
    name: '【物件名を入力】', // ← 変更必須: 例: '奈良市右京3丁目 全5区画'
    address: '都道府県市区町村番地', // ← 変更必須: 例: '奈良県奈良市右京3丁目12-2'
    city: '市区町村名', // ← 変更必須: 例: '奈良市'

    // ========== 価格情報 ==========
    price: '0000万円', // ← 変更必須: 表示用（例: '1,880万円'、成約済みの場合は '成約済み'）
    priceNumeric: 0, // ← 変更必須: 万円単位の数値（例: 1880）、成約済みの場合は 0

    // ========== 土地情報 ==========
    landSize: '00.00㎡ (00.00坪)', // ← 変更必須: 例: '110.00㎡ (33.27坪)'
    landSizeNumeric: 0, // ← 変更必須: 坪単位の数値（例: 33.27）

    // ========== アクセス情報 ==========
    station: '最寄り駅名', // ← 変更必須: 例: '新田辺'、バス利用の場合は null
    walkingMinutes: 0, // ← 変更必須: 徒歩分数（例: 6）、バス利用の場合は null

    // ========== 建築条件 ==========
    hasConstructionCondition: false, // ← 確認: true = 建築条件付き、false = 建築条件なし
    constructionCondition: CONSTRUCTION_CONDITIONS.WITHOUT_CONDITION, // オプション: 将来的な移行用

    // ========== ステータス ==========
    status: 'Available', // ← 変更: 'New' | 'Available' | 'Reserved' | 'Sold'

    // ========== 表示用 ==========
    image: 'https://images.unsplash.com/photo-XXXXXXXX', // ← 変更推奨: 画像URL
    features: [
        // ← 変更必須: 物件の特徴（3〜5項目推奨）
        '最寄り駅からの距離',
        '建ぺい率XX%',
        '容積率XX%',
    ],

    // ========== 建物プラン関連 ==========
    // 推奨プランIDの設定ガイド:
    // - 建ぺい率60%以上: ['hana-28-3ldk', 'kaze-30-4ldk', 'hana-31-4ldk']
    // - 建ぺい率50%程度: ['hana-28-3ldk', 'kaze-30-4ldk']
    // - 建ぺい率40%以下: ['hana-28-3ldk']
    // - プラン不明の場合: []（空配列）
    recommendedPlanIds: [], // ← 変更必須: 推奨プランID配列

    // 建築可能最大面積の計算方法:
    // maxBuildingSize = 土地面積(㎡) × (建ぺい率 / 100)
    // 例: 110㎡ の土地で建ぺい率60% → 110 × 0.6 = 66㎡
    maxBuildingSize: 0, // ← 変更必須: 建築可能最大面積（㎡）

    buildingCoverage: 60, // オプション: 建ぺい率（%）
    floorAreaRatio: 200, // オプション: 容積率（%）
};

/**
 * 使用例:
 * 
 * export const properties: Property[] = [
 *   // ... 既存の物件データ
 *   {
 *     id: 'prop-15',
 *     name: '生駒市上町 全10区画',
 *     address: '奈良県生駒市上町123-4',
 *     city: '生駒市',
 *     price: '1,980万円',
 *     priceNumeric: 1980,
 *     landSize: '120.00㎡ (36.30坪)',
 *     landSizeNumeric: 36.30,
 *     station: '生駒',
 *     walkingMinutes: 10,
 *     hasConstructionCondition: false,
 *     status: 'New',
 *     image: 'https://images.unsplash.com/photo-...',
 *     features: [
 *       '近鉄「生駒」駅徒歩10分',
 *       '建ぺい率60%',
 *       '容積率200%'
 *     ],
 *     recommendedPlanIds: ['hana-28-3ldk', 'kaze-30-4ldk'],
 *     maxBuildingSize: 72, // 120㎡ × 0.6
 *     buildingCoverage: 60,
 *     floorAreaRatio: 200,
 *   },
 * ];
 */
