// src/app/[lang]/merch/page.js
import { getDictionary } from '@/lib/dictionaries';
import MerchPageClient from './MerchPageClient';

export default async function MerchPage({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return <MerchPageClient lang={lang} dict={dict} />;
}
