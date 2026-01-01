import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Sidebar() {
  const { t, i18n } = useTranslation();

  return (
    <aside className="w-60 h-screen bg-slate-900 text-white flex flex-col p-4">
      <h1 className="text-xl font-bold mb-6">Secure Painel</h1>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => i18n.changeLanguage('pt')}
          className="bg-slate-700 px-2 py-1 rounded text-sm hover:bg-slate-800 cursor-pointer"
        >
          PT
        </button>
        <button
          onClick={() => i18n.changeLanguage('en')}
          className="bg-slate-700 px-2 py-1 rounded text-sm hover:bg-slate-800 cursor-pointer"
        >
          EN
        </button>
      </div>

      <nav className="flex flex-col gap-3">
        <Link to="/" className="hover:text-blue-400">
          {t('dashboard')}
        </Link>
        <Link to="/devices" className="hover:text-blue-400">
          {t('devices')}
        </Link>
        <Link to="/logs" className="hover:text-blue-400">
          {t('logs')}
        </Link>
      </nav>
    </aside>
  );
}
