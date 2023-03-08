import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setConnectionStatus] = useState('online');

  useEffect(() => {
    window.addEventListener('online', () => setConnectionStatus('online'));
    window.addEventListener('offline', () => setConnectionStatus('offline'));

    return () => {
      window.removeEventListener('online', () => setConnectionStatus('online'));
      window.removeEventListener('offline', () =>
        setConnectionStatus('offline')
      );
    };
  }, []);
  return (
    <div className={status === 'online' ? 'status' : 'status status_offline'}>
      {status}
    </div>
  );
};

export default ConnectionStatus;
