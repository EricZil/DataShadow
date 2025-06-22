import React from 'react';

const RecommendedActions = () => {
  const actions = [
    {
      title: 'Change Your Passwords',
      description: 'Use a strong, unique password for each of your online accounts.',
      icon: 'M15 7a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V9a2 2 0 012-2h3zM6 7a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2V9a2 2 0 00-2-2h-4.586a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 009.586 5H6z',
    },
    {
      title: 'Enable 2FA/MFA',
      description: 'Add an extra layer of security with two-factor or multi-factor authentication.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l5.318-5.318a4.5 4.5 0 016.364 0l5.318 5.318A12.02 12.02 0 0021 12.417a11.955 11.955 0 01-3.382-5.433z',
    },
    {
      title: 'Monitor Your Accounts',
      description: 'Keep an eye on your financial and email accounts for suspicious activity.',
      icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    },
    {
      title: 'Beware of Phishing',
      description: 'Be cautious of unsolicited emails or messages asking for personal information.',
      icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#1A1F2E] to-[#1F2433] rounded-2xl p-8 border border-gray-800/50">
      <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Recommended Actions
      </h3>
      <div className="space-y-5">
        {actions.map((action, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center mt-1">
              <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={action.icon} />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-white text-base">{action.title}</h4>
              <p className="text-base text-gray-400">{action.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedActions; 