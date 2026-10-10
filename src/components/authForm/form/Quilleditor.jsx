
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useFormikContext } from 'formik';
import FormikError from './FormikError';

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ direction: 'rtl' }],
    [{ align: [] }],
    ['link', 'clean'],
  ],
};

const Quilleditor = ({ form: formProp, name, label, placeholder = 'متن خود را وارد کنید...', className = '', ...props }) => {
  const formikContext = useFormikContext();
  const form = formProp || formikContext;

  const handleChange = (content) => {
    const value = content === '<p><br></p>' ? '' : content;
    if (form) {
      form.setFieldValue(name, value);
    }
  };

  const handleBlur = () => {
    if (form) {
      form.setFieldTouched(name, true);
    }
  };

  const currentValue = form?.values?.[name] || '';

  return (
<div 
  className={`col-12 col-md-10 col-lg-8 mx-auto mb-3 ${className}`} 
  style={{ direction: 'rtl' }}
>      {/* استایل سراسری ادیتور جهت هماهنگی کامل با فیلدهای بوت‌استرپ */}
      <style>{`
        .custom-quill-container {
          width: 100% !important;
          background-color: #ffffff;
          border-radius: 6px;
        }
        .custom-quill-container .ql-toolbar {
          direction: ltr; /* ابزارها از چپ مرتب باشند یا rtl به انتخاب */
          text-align: right;
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
          border-color: #dee2e6;
          background-color: #f8f9fa;
        }
        .custom-quill-container .ql-container {
          border-bottom-left-radius: 6px;
          border-bottom-right-radius: 6px;
          border-color: #dee2e6;
          min-height: 160px;
          font-family: inherit;
        }
        .custom-quill-container .ql-editor {
          direction: rtl;
          text-align: right;
          min-height: 160px;
          font-family: inherit;
          font-size: 14px;
        }
        .custom-quill-container .ql-editor.ql-blank::before {
          right: 15px;
          left: auto;
          font-style: normal;
          color: #6c757d;
        }
      `}</style>

      {label && (
        <label className="form-label d-block text-end mb-2 fw-medium text-secondary">
          {label}
        </label>
      )}

      <div className="custom-quill-container">
        <ReactQuill
          theme="snow"
          value={currentValue}
          onChange={handleChange}
          onBlur={handleBlur}
          modules={modules}
          placeholder={placeholder}
          {...props}
        />
      </div>
      <div className='mt-2'>
          <FormikError form={form} name={name} />
      </div>
    </div>
  );
};

export default Quilleditor;
