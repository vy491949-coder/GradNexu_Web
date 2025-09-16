import React, { useState } from 'react';
import { Heart, Shield, CreditCard, Smartphone, QrCode, Check, ArrowLeft } from 'lucide-react';

const DonatePage: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    upiId: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
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
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
            <p className="text-lg text-gray-600 mb-6">Your Contribution Matters</p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Donation Amount:</span>
                <span className="text-2xl font-bold text-green-600">₹{getFinalAmount()}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Payment Method:</span>
                <span className="text-gray-900 font-medium">
                  {paymentMethod === 'upi' ? 'UPI' : 'Credit Card'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Transaction ID:</span>
                <span className="text-gray-900 font-mono text-sm">TXN{Date.now()}</span>
              </div>
            </div>

            <p className="text-gray-600 mb-8">
              Your generous contribution will help us continue providing quality education and opportunities to students across India.
            </p>

            <button
              onClick={() => setShowConfirmation(false)}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
            >
              Make Another Donation
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Our Mission</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us continue providing quality education and opportunities to students across India. Every contribution makes a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Impact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Impact</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Educational Resources</h3>
                    <p className="text-gray-600">Support access to books, online courses, and learning materials for underprivileged students.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Technology Access</h3>
                    <p className="text-gray-600">Provide laptops and internet connectivity to students in remote areas.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Scholarship Programs</h3>
                    <p className="text-gray-600">Fund scholarships for meritorious students from economically disadvantaged backgrounds.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Trusted & Secure</h3>
              <div className="flex items-center space-x-2 mb-3">
                <Shield className="w-5 h-5" />
                <span>256-bit SSL encryption</span>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <Check className="w-5 h-5" />
                <span>100% secure payment processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Tax exemption under 80G</span>
              </div>
            </div>
          </div>

          {/* Right Column - Donation Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <form onSubmit={handleDonate} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Donation Amount */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Donation Amount</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      className={`p-3 rounded-xl border-2 font-medium transition-all duration-200 ${
                        selectedAmount === amount
                          ? 'border-blue-600 bg-blue-50 text-blue-600'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300'
                      }`}
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>
                <div>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter custom amount"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Payment Method</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      paymentMethod === 'upi'
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-6 h-6 text-blue-600" />
                      <div className="text-left">
                        <div className="font-medium text-gray-900">UPI Payment</div>
                        <div className="text-sm text-gray-600">Quick & Secure</div>
                      </div>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      paymentMethod === 'card'
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <CreditCard className="w-6 h-6 text-blue-600" />
                      <div className="text-left">
                        <div className="font-medium text-gray-900">Credit/Debit Card</div>
                        <div className="text-sm text-gray-600">Visa, Mastercard, RuPay</div>
                      </div>
                    </div>
                  </button>
                </div>

                {/* UPI Details */}
                {paymentMethod === 'upi' && (
                  <div className="space-y-4 p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-center justify-center space-x-4">
                      <QrCode className="w-24 h-24 text-blue-600" />
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-2">Scan QR Code or enter UPI ID</p>
                        <p className="font-mono text-sm bg-white px-3 py-2 rounded-lg">gradnexus@upi</p>
                      </div>
                    </div>
                    <input
                      type="text"
                      value={formData.upiId}
                      onChange={(e) => handleInputChange('upiId', e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your UPI ID (optional)"
                    />
                  </div>
                )}

                {/* Card Details */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4 p-4 bg-gray-50 rounded-xl">
                    <input
                      type="text"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Card Number"
                      maxLength={19}
                      required={paymentMethod === 'card'}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        value={formData.expiryDate}
                        onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                        className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="MM/YY"
                        maxLength={5}
                        required={paymentMethod === 'card'}
                      />
                      <input
                        type="text"
                        value={formData.cvv}
                        onChange={(e) => handleInputChange('cvv', e.target.value)}
                        className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="CVV"
                        maxLength={4}
                        required={paymentMethod === 'card'}
                      />
                    </div>
                    <div className="flex justify-center space-x-4 pt-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-8 opacity-60" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" alt="Mastercard" className="h-8 opacity-60" />
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={getFinalAmount() === 0 || !formData.name || !formData.email}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Donate ₹{getFinalAmount()}</span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;