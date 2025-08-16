'use client';

import { useAppDispatch, useAppSelector } from '@/store/hook';
import { setLang } from '@/store/slices/languageSlice';

export default function LanguageSelector() {
  const dispatch = useAppDispatch();
  const lang = useAppSelector((state) => state.language.lang);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLang(e.target.value as 'vi' | 'en'));
  };

  return (
    <div className="flex items-center gap-2 text-sm">
      <label htmlFor="language" className="text-white font-medium">
        Language:
      </label>
      <select
        id="language"
        value={lang}
        onChange={handleChange}
        className="bg-zinc-900 text-white border border-zinc-700 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
      >
        <option value="vi">Tiếng Việt</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}
