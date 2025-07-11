import React from 'react';

const RegisterPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    onClose(); // Закриваємо попап після відправки
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/45 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-sm rounded-lg shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl text-accent-100 font-semibold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-3 py-2 w-full text-accent-100"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded px-3 py-2 w-full text-accent-100"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPopup;
