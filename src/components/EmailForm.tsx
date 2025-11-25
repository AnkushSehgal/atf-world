'use client';

import { useState } from 'react';

export default function EmailForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            console.log(`Subscribed: ${email}`);
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-8">
            <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm transition-all"
                disabled={status === 'loading' || status === 'success'}
            />
            <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${status === 'success'
                        ? 'bg-green-500 text-white cursor-default'
                        : 'bg-blue-600 hover:bg-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/30'
                    }`}
            >
                {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Notify Me'}
            </button>
        </form>
    );
}
