import { toast } from "react-toastify";

let loadingToastId = null; // Store toast ID globally

export const notification = (status, message, isLoading = false) => {
  if (isLoading) {
    // Show loading toast and store its ID
    loadingToastId = toast.loading(message);
  } else if (loadingToastId) {
    // If there's a loading toast, update it to success/error
    toast.update(loadingToastId, {
      render: message,
      type: status,
      isLoading: false,
      autoClose: 2000,
    });
    loadingToastId = null; // Reset ID after updating
  } else {
    // Normal toast (without loading)
    toast[status](message, {
      autoClose: 2000,
      draggable: true,
    });
  }
};

// ==================== Read Toast notification ======================
// Customize Toast Appearance
// theme: "dark",
// hideProgressBar: true,
// draggable: false,

// Customize the toast message and layout
// toast("Custom toast message!", {
//     position: "bottom-left",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     theme: "dark",
//   });

// Method	           Description
// toast.success()	  ✅ Success toast (green)
// toast.error()	  ❌ Error toast (red)
// toast.warn()	      ⚠️ Warning toast (yellow)
// toast.info()	      ℹ️ Info toast (blue)
// toast()	⚪        Default toast
// toast.dismiss()	  🛑 Closes all toasts
// toast.promise()	  🔄 Shows loading toast for a promise
// toast.position	  📍 Controls toast position
// toast.autoClose	  ⏳ Sets duration before closing
// toast.loading      🔃 Sets to load toast
