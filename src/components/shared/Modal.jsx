// // Modal.js
import React from 'react';
// import { Button } from "@/components/ui/button";

import { Button } from "@/components/ui/button";

// export function Modal({ isOpen, onClose, children }) {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6 py-15">
//       <div className="bg-white rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
//         <div className="p-4 sm:p-6">
//         {children}
//         </div>
        
//         <div className="sticky bottom-0 bg-white p-4 border-t">
//           <Button variant="outline" onClick={onClose} className="w-full">Close</Button>
//         </div>
//       </div>
//     </div>
//   );
// }
export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6 py-15">
      <div className="bg-white rounded-lg w-full max-w-lg max-h-full overflow-hidden">
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[80vh]">
          {children}
        </div>

        <div className="sticky bottom-0 bg-white p-4 border-t">
          <Button variant="outline" onClick={onClose} className="w-full">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
