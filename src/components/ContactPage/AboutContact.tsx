import { useState } from 'react';

const AboutContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // Placeholder: replace with real API endpoint
      await new Promise((r) => setTimeout(r, 700));
      setStatus('sent');
      setName(''); setEmail(''); setMessage('');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Contactez-nous</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">Remplissez le formulaire ci-dessous et nous reviendrons vers vous sous 24h.</p>

        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Nom</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} required className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows={5} required className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800" />
          </div>

          <div className="flex items-center justify-between">
            <button type="submit" disabled={status==='sending'} className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md">
              {status === 'sending' ? 'Envoi...' : 'Envoyer'}
            </button>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {status === 'sent' && 'Merci ! Nous avons reçu votre message.'}
              {status === 'error' && 'Une erreur est survenue, réessayez.'}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AboutContact;
