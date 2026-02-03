/**
 * お客様の声（成功事例）のデータ
 */

export interface Testimonial {
    id: string;
    customerName: string; // お客様名（仮名）
    area: string; // エリア
    city: string; // 市区町村
    plan: string; // 建てたプラン
    landSize: number; // 土地坪数
    comment: string; // コメント
    age?: string; // 年代（任意）
    family?: string; // 家族構成（任意）
    date: string; // 建築時期
}

/**
 * お客様の声のマスターデータ
 */
export const testimonials: Testimonial[] = [
    {
        id: 'testimonial-1',
        customerName: 'K.T様',
        area: '京都府',
        city: '京田辺市',
        plan: '花 28坪 3LDK',
        landSize: 35,
        comment: '子育て世代にぴったりの広さで、コンパクトながら収納も充実しています。駅から近く、通勤にも便利で大満足です。やまと不動産さんは土地探しから丁寧にサポートしてくださり、安心して建てることができました。',
        age: '30代',
        family: '夫婦+お子様2人',
        date: '2024年春'
    },
    {
        id: 'testimonial-2',
        customerName: 'M.Y様',
        area: '京都府',
        city: '城陽市',
        plan: '風 30坪 4LDK',
        landSize: 42,
        comment: '4部屋あるので、子ども部屋を2つ確保でき、将来的にも安心です。リビングも広々としていて、家族が集まる時間が増えました。土地の価格も予算内で、理想の家が建てられて感謝しています。',
        age: '40代',
        family: '夫婦+お子様3人',
        date: '2024年夏'
    },
    {
        id: 'testimonial-3',
        customerName: 'S.H様',
        area: '京都府',
        city: '京田辺市',
        plan: '花 31坪 4LDK',
        landSize: 50,
        comment: '広い敷地を活かして、庭も作ることができました。平屋風の設計で、バリアフリーにも対応しており、老後も安心して住めます。やまと不動産さんの提案力に助けられました。',
        age: '50代',
        family: '夫婦',
        date: '2023年秋'
    },
    {
        id: 'testimonial-4',
        customerName: 'A.N様',
        area: '京都府',
        city: '宇治市',
        plan: '花 28坪 3LDK',
        landSize: 30,
        comment: '初めての家づくりで不安でしたが、担当者の方が親身になって相談に乗ってくださいました。土地+建物のセットプランで、総額が明確だったのも安心材料でした。',
        age: '30代',
        family: '夫婦+お子様1人',
        date: '2024年冬'
    },
    {
        id: 'testimonial-5',
        customerName: 'T.K様',
        area: '京都府',
        city: '木津川市',
        plan: '風 30坪 4LDK',
        landSize: 45,
        comment: '駅からのアクセスも良く、周辺環境も静かで住みやすいです。建物の品質も高く、細部までこだわって建ててもらいました。月々の支払いも無理なく、満足しています。',
        age: '40代',
        family: '夫婦+お子様2人',
        date: '2024年春'
    }
];

/**
 * エリア（市区町村）から成功事例を取得
 */
export function getTestimonialsByCity(city: string): Testimonial[] {
    return testimonials.filter(testimonial => testimonial.city === city);
}

/**
 * プランから成功事例を取得
 */
export function getTestimonialsByPlan(plan: string): Testimonial[] {
    return testimonials.filter(testimonial => testimonial.plan.includes(plan));
}

/**
 * ランダムに成功事例を取得
 */
export function getRandomTestimonials(count: number = 3): Testimonial[] {
    const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
