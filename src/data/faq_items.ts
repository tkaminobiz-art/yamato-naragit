/**
 * FAQ（よくある質問）のデータ
 */

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category: 'price' | 'construction' | 'loan' | 'land' | 'other';
}

/**
 * FAQのマスターデータ
 */
export const faqItems: FAQItem[] = [
    {
        id: 'faq-1',
        question: '土地だけの購入もできますか？',
        answer: 'はい、可能です。土地のみのご購入も承っております。ただし、当社では土地と建物をセットでご提供することで、トータルコストを抑えたプランをご提案しておりますので、ぜひ一度ご相談ください。',
        category: 'land'
    },
    {
        id: 'faq-2',
        question: '諸費用はいくらかかりますか？',
        answer: '諸費用は物件価格の約7-10%が目安です。登記費用、仲介手数料、住宅ローン手数料、火災保険料などが含まれます。詳細なお見積りは、お気軽にお問い合わせください。',
        category: 'price'
    },
    {
        id: 'faq-3',
        question: '建物のカスタマイズは可能ですか？',
        answer: 'はい、可能です。標準プランをベースに、間取りの変更や設備のグレードアップなど、お客様のご要望に応じてカスタマイズいたします。詳しくは設計相談時にご相談ください。',
        category: 'construction'
    },
    {
        id: 'faq-4',
        question: '住宅ローンの相談はできますか？',
        answer: 'はい、住宅ローンのご相談も承っております。提携金融機関のご紹介や、ローンシミュレーション、審査のサポートなど、トータルでサポートいたします。',
        category: 'loan'
    },
    {
        id: 'faq-5',
        question: '建築期間はどのくらいですか？',
        answer: '一般的に、設計から完成まで約6-8ヶ月程度です。ただし、プランの内容や天候などにより前後する場合がございます。詳細なスケジュールは、ご契約時にご説明いたします。',
        category: 'construction'
    },
    {
        id: 'faq-6',
        question: '見学や現地案内はできますか？',
        answer: 'はい、可能です。ご希望の物件の現地案内や、モデルハウスの見学を随時承っております。事前にご予約いただければ、専門スタッフがご案内いたします。',
        category: 'other'
    },
    {
        id: 'faq-7',
        question: '頭金はいくら必要ですか？',
        answer: '一般的には物件価格の10-20%程度が目安ですが、頭金なし（フルローン）でのご購入も可能です。お客様の資金計画に合わせてご提案いたしますので、お気軽にご相談ください。',
        category: 'loan'
    },
    {
        id: 'faq-8',
        question: '建ぺい率・容積率とは何ですか？',
        answer: '建ぺい率は敷地面積に対する建築面積の割合、容積率は敷地面積に対する延床面積の割合です。これらの制限により、建てられる建物の大きさが決まります。詳しくはスタッフがご説明いたします。',
        category: 'land'
    },
    {
        id: 'faq-9',
        question: '月々の支払い例を教えてください',
        answer: '例えば、総額4,000万円を35年ローン（金利1.5%）で借り入れた場合、月々の支払いは約11.3万円となります。詳細なシミュレーションは、物件ごとにご提示いたします。',
        category: 'loan'
    },
    {
        id: 'faq-10',
        question: '建築条件付き土地とは何ですか？',
        answer: '建築条件付き土地とは、指定された建築会社（当社）で建物を建てることを条件として販売される土地です。土地と建物をセットでご提供することで、スムーズな家づくりと、コストメリットを実現しています。',
        category: 'land'
    }
];

/**
 * カテゴリーからFAQを取得
 */
export function getFAQsByCategory(category: FAQItem['category']): FAQItem[] {
    return faqItems.filter(item => item.category === category);
}

/**
 * キーワード検索でFAQを取得
 */
export function searchFAQs(keyword: string): FAQItem[] {
    const lowerKeyword = keyword.toLowerCase();
    return faqItems.filter(item =>
        item.question.toLowerCase().includes(lowerKeyword) ||
        item.answer.toLowerCase().includes(lowerKeyword)
    );
}

/**
 * 人気のFAQを取得（上位N件）
 */
export function getPopularFAQs(count: number = 5): FAQItem[] {
    return faqItems.slice(0, count);
}
