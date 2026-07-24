import { useRef } from "react";

type Props = {
  onFilesSelected: (files: File[]) => void;
};

export default function FileUploader({ onFilesSelected }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const seleccionar = () => {
    inputRef.current?.click();
  };

  const cambio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const archivos = Array.from(event.target.files || []);

    onFilesSelected(archivos);
  };

  return (
    <div
      style={{
        border: "2px dashed #0d6efd",
        borderRadius: 12,
        padding: 60,
        textAlign: "center",
        background: "#f8fbff",
      }}
    >
      <h2>📂 Arrastra aquí tus archivos PDF</h2>

      <p>
        Selecciona uno o varios certificados de retención.
      </p>

      <button
        onClick={seleccionar}
        style={{
          padding: "14px 30px",
          background: "#0d6efd",
          color: "white",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontSize: 16,
        }}
      >
        Seleccionar archivos
      </button>

      <input
        ref={inputRef}
        type="file"
        multiple
        accept=".pdf"
        hidden
        onChange={cambio}
      />
    </div>
  );
}