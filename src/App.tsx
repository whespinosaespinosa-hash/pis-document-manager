import { useState } from "react";
import "./App.css";
import FileUploader from "./components/FileUploader";

function App() {
  const [archivos, setArchivos] = useState<File[]>([]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "900px",
          background: "#ffffff",
          borderRadius: "16px",
          padding: "40px",
          boxShadow: "0 8px 30px rgba(0,0,0,.08)",
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#003b5c",
            fontSize: "36px",
          }}
        >
          📄 PIS Document Manager
        </h1>

        <p
          style={{
            color: "#666",
            fontSize: "18px",
            marginTop: "10px",
          }}
        >
          Gestor Inteligente de Certificados de Retención
        </p>

        <hr style={{ margin: "30px 0" }} />

        <FileUploader
          onFilesSelected={(files) => {
            setArchivos(files);
          }}
        />

        <div
          style={{
            marginTop: 30,
            padding: 20,
            borderRadius: 10,
            background: "#eef5ff",
          }}
        >
          <h2>Archivos cargados</h2>

          {archivos.length === 0 ? (
            <p>No hay archivos seleccionados.</p>
          ) : (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "20px",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid #ddd" }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "10px",
                    }}
                  >
                    Archivo
                  </th>

                  <th
                    style={{
                      textAlign: "center",
                      padding: "10px",
                    }}
                  >
                    Tamaño
                  </th>

                  <th
                    style={{
                      textAlign: "center",
                      padding: "10px",
                    }}
                  >
                    Estado
                  </th>
                </tr>
              </thead>

              <tbody>
                {archivos.map((archivo) => (
                  <tr
                    key={archivo.name}
                    style={{
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    <td style={{ padding: "10px" }}>
                      {archivo.name}
                    </td>

                    <td
                      style={{
                        textAlign: "center",
                        padding: "10px",
                      }}
                    >
                      {(archivo.size / 1024 / 1024).toFixed(2)} MB
                    </td>

                    <td
                      style={{
                        textAlign: "center",
                        padding: "10px",
                      }}
                    >
                      ⏳ Pendiente
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;