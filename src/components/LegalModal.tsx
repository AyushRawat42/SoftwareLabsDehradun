/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { site } from '../data/site';

export type LegalDoc = 'privacy' | 'terms' | null;

interface LegalModalProps {
  doc: LegalDoc;
  onClose: () => void;
}

export default function LegalModal({ doc, onClose }: LegalModalProps) {
  const title = doc === 'privacy' ? 'Privacy Policy' : 'Terms of Use';

  return (
    <AnimatePresence>
      {doc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.97, y: 16 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.97, y: 16 }}
            className="bg-white w-full max-w-3xl rounded-xl shadow-2xl border border-gray-100 flex flex-col max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-dialog-title"
          >
            <div className="bg-[#0F2D54] text-white p-5 flex items-center justify-between">
              <h2 id="legal-dialog-title" className="font-display font-bold text-lg">
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-y-auto p-6 sm:p-8 space-y-5 text-sm text-gray-700 font-sans leading-relaxed text-left">
              {doc === 'privacy' ? <PrivacyBody /> : <TermsBody />}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PrivacyBody() {
  return (
    <>
      <p className="text-xs text-gray-500">Last updated: 21 August 2026</p>
      <p>
        {site.name} (“we”, “us”) operates this brochure website and the Software Labs Higher Education ERP. This policy explains what personal data we collect through this site, why we collect it, and how we handle it under the Digital Personal Data Protection Act, 2023 (DPDPA).
      </p>
      <h3 className="font-display font-bold text-gray-900 text-base">Who we are</h3>
      <p>
        We are a software studio based in {site.locationLine}. You can contact us at{' '}
        <a className="text-[#10A5B5] underline" href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <h3 className="font-display font-bold text-gray-900 text-base">Data we collect on this website</h3>
      <p>
        When you submit the enquiry form we collect your name, email address, optional phone number, organization name, enquiry type, timeline, and message. If you email us directly we process the contents of that correspondence. We do not run advertising pixels or third-party analytics on this brochure unless we disclose them here later.
      </p>
      <h3 className="font-display font-bold text-gray-900 text-base">Why we collect it</h3>
      <p>
        We use enquiry data solely to respond to your request — a campus ERP demo, a custom project discussion, or a support question. Legal basis: your consent when you submit the form, and our legitimate need to reply to a business enquiry.
      </p>
      <h3 className="font-display font-bold text-gray-900 text-base">How enquiries are delivered</h3>
      <p>
        Form submissions are emailed to {site.email} through FormSubmit, a form-to-email service. FormSubmit processes the payload in order to deliver the message. Do not include passwords, Aadhaar numbers, or other sensitive personal data in the form.
      </p>
      <h3 className="font-display font-bold text-gray-900 text-base">Campus ERP data (product customers)</h3>
      <p>
        Institutions that deploy Software Labs Higher Education ERP process student, parent, faculty, and financial records on infrastructure hosted in Indian cloud regions (AWS Mumbai). That processing is governed by a written customer agreement, encrypted audit logging, and DPDPA obligations as applicable to the institute (as data fiduciary) and to us (as data processor, where we act in that role). This brochure privacy notice does not replace that agreement.
      </p>
      <h3 className="font-display font-bold text-gray-900 text-base">Retention</h3>
      <p>
        Website enquiry emails are kept only as long as needed to handle the conversation and any resulting proposal, then deleted or archived according to ordinary business-record practice. You may ask us to delete an enquiry by writing to {site.email}.
      </p>
      <h3 className="font-display font-bold text-gray-900 text-base">Your rights</h3>
      <p>
        Under DPDPA you may request access, correction, or erasure of personal data we hold about you from this website, and you may withdraw consent for further contact. Write to {site.email}. We will not sell personal data.
      </p>
      <h3 className="font-display font-bold text-gray-900 text-base">Security</h3>
      <p>
        This site is served over HTTPS. Enquiry emails travel through FormSubmit to our inbox. We do not store form submissions in the browser or in a public dashboard on this website.
      </p>
    </>
  );
}

function TermsBody() {
  return (
    <>
      <p className="text-xs text-gray-500">Last updated: 21 August 2026</p>
      <p>
        These terms govern use of the {site.name} brochure website. They do not replace a signed proposal, statement of work, or Higher Education ERP subscription agreement.
      </p>
      <h3 className="font-display font-bold text-gray-900 text-base">The website</h3>
      <p>
        Content on this site describes our flagship campus ERP and our custom software services. Product capabilities (including APAAR, ABC, DigiLocker/NAD, Tally Prime, Zoho Books, and WhatsApp Business API) are platform features of Software Labs Higher Education ERP. Integration scope for a given campus is confirmed in the implementation proposal after a demo.
      </p>
      <h3 className="font-display font-bold text-gray-900 text-base">No public pricing for the ERP</h3>
      <p>
        Campus ERP commercial terms are issued as a fixed-scope proposal after we understand student strength, modules, and migration complexity. Custom website and portal work is also quoted in a written proposal before build starts.
      </p>
      <h3 className="font-display font-bold text-gray-900 text-base">Intellectual property</h3>
      <p>
        The Software Labs name, logo, and this website’s design are our property. Live client websites linked from the Projects section remain the property of those clients. Custom code we build for a client is owned as stated in that client’s agreement.
      </p>
      <h3 className="font-display font-bold text-gray-900 text-base">Acceptable use</h3>
      <p>
        Do not misuse the enquiry form (spam, automated submissions, or unlawful content). We may ignore or delete abusive messages.
      </p>
      <h3 className="font-display font-bold text-gray-900 text-base">Limitation</h3>
      <p>
        This brochure is informational. It is not a warranty, accreditation, or government endorsement. NAAC Binary, MBGL, NEP 2020, UGC, APAAR, ABC, NAD, and DPDPA are public frameworks; we design the product around them but we are not those authorities.
      </p>
      <h3 className="font-display font-bold text-gray-900 text-base">Contact</h3>
      <p>
        Questions about these terms: <a className="text-[#10A5B5] underline" href={`mailto:${site.email}`}>{site.email}</a>, {site.locationLine}.
      </p>
    </>
  );
}
