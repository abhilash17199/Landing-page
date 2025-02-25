export default function Input({ type, placeholder, className, ...props }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={`border p-2 rounded w-full ${className}`}
        {...props}
      />
    );
  }
  