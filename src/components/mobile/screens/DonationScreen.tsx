import React, { useState } from 'react';
import { Heart, Shield, CreditCard, Smartphone, Check, ChevronLeft } from 'lucide-react';

interface DonationScreenProps {
  onBack: () => void;
}

const DonationScreen: React.FC<DonationScreenProps> = ({ onBack }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    upiId: ''
  });

  const donationAmounts = [500, 1000, 2500, 5000];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const getFinalAmount = () => {
    return selectedAmount || parseInt(customAmount) || 0;
  };

  if (showConfirmation) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-green-50 to-blue-50 flex flex-col">
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center max-w-sm w-full">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h1>
            <p className="text-lg text-gray-600 mb-6">Your Contribution Matters</p>
            
            <div className="bg-gray-50 rounded-2xl p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Amount:</span>
                <span className="text-xl font-bold text-green-600">₹{getFinalAmount()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Method:</span>
                <span className="text-gray-900 font-medium">
                  {paymentMethod === 'upi' ? 'UPI' : 'Card'}
                </span>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-6">
              Your generous contribution will help us continue providing quality education and opportunities.
            </p>

            <button
              onClick={onBack}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 pt-12 pb-4">
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-xl"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Support Us</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <form onSubmit={handleDonate} className="space-y-6">
          {/* Impact Message */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Your Impact</h2>
            <p className="text-gray-600 text-sm">
              Help us provide quality education, mentorship, and opportunities to students across India.
            </p>
          </div>

          {/* Personal Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <h3 className="font-bold text-gray-900 mb-4">Your Details</h3>
            <div className="space-y-4">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email Address"
                required
              />
            </div>
          </div>

          {/* Donation Amount */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <h3 className="font-bold text-gray-900 mb-4">Donation Amount</h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => handleAmountSelect(amount)}
                  className={`p-3 rounded-xl border-2 font-semibold transition-all duration-200 ${
                    selectedAmount === amount
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : 'border-gray-200 bg-white text-gray-700'
                  }`}
                >
                  ₹{amount}
                </button>
              ))}
            </div>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter custom amount"
            />
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <h3 className="font-bold text-gray-900 mb-4">Payment Method</h3>
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setPaymentMethod('upi')}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-200 ${
                  paymentMethod === 'upi'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">UPI Payment</div>
                    <div className="text-sm text-gray-600">Quick & Secure</div>
                  </div>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-200 ${
                  paymentMethod === 'card'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">Credit/Debit Card</div>
                    <div className="text-sm text-gray-600">Visa, Mastercard, RuPay</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Security Note */}
          <div className="bg-green-50 rounded-2xl p-4 border border-green-200">
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-green-800">Secure & Trusted</span>
            </div>
            <p className="text-green-700 text-sm">
              Your payment is protected with bank-level security and encryption.
            </p>
          </div>
        </form>
      </div>

      {/* Bottom Action */}
      <div className="bg-white border-t border-gray-200 px-6 py-4 safe-area-bottom">
        <button
          onClick={handleDonate}
          disabled={getFinalAmount() === 0 || !formData.name || !formData.email}
          className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg flex items-center justify-center space-x-2"
        >
          <Heart className="w-5 h-5" />
          <span>Donate ₹{getFinalAmount()}</span>
        </button>
      </div>
    </div>
  );
};

export default DonationScreen;