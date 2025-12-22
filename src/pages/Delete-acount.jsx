import { useState } from "react";

export default function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    // TODO: send email to backend API
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 sm:p-8">
        {!submitted ? (
          <>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
              Delete Account
            </h1>

            <p className="text-sm text-gray-600 mb-6">
              We're sorry to see you go. Please enter the email address
              associated with your account to request account deletion.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-xs text-yellow-800 leading-relaxed">
                ⚠️ Once submitted, your account will be scheduled for deletion.
                If there is no activity on the account, it will be permanently
                deleted after <strong>90 days</strong>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#33D185] focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-3 rounded-lg transition"
              >
                Request Account Deletion
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
              ✅
            </div>

            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Request Received
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              Your request has been successfully received.
              <br />
              <br />
              If there is no activity on your account, it will be permanently
              deleted within <strong>90 days</strong>.
            </p>

            <p className="text-xs text-gray-500 mt-4">
              If you log in before this period ends, the deletion request will
              be automatically canceled.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
