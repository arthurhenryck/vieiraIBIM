
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <img src="/images/icons8-computador-64.png" className="logo" alt="Logo" />
        <p className="cyber">Cyber Assist</p>
      </div>

      <div className="baner">
        <img src="/images/imgBaner.jpg" className="imgBaner" alt="Banner" />
        <div className="dark"></div>
        <p className="escrBaner">
          Concerto e limpeza de <br /> computadores e notebooks
        </p>
      </div>

      <div>
        <div>
          <div className="bottom"></div>
          <img src="/images/limpeza.webp" className="limpezaimg" alt="Limpeza" />
          <p className="Limpeza texto">Limpeza</p>
        </div>

        <div>
          <div className="bottom"></div>
          <img src="https://s.zst.com.br/cms-assets/2021/03/backup-computador-1-.jpg" className="limpezaimg" alt="Backup" />
          <p className="Backup texto">Backup</p>
          <img src="/images/icons8-promoção-48.png" className="promo" alt="Promoção" />
        </div>

        <div className="card3">
          <div className="bottom"></div>
          <img src="https://tm.ibxk.com.br/2012/9/materias/26420193358.jpg" className="limpezaimg" alt="Remoção de Virus" />
          <p className="Virus texto">Remoção de Vírus</p>
        </div>

        <div>
          <div className="bottom"></div>
          <img
            src="https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg"
            className="limpezaimg"
            alt="Programação"
          />
          <p className="programação texto">Programação</p>
        </div>

        <div>
          <div className="bottom"></div>
          <img
            src="https://s2-g1.glbimg.com/z7O63Q01CUicvJYsjZjVr05aRCs=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/m/D/DFYKn5QbSfiHCv21vUTA/foto-1-destaque-g1-unifor-design-grafico-e-digital.jpg"
            className="limpezaimg"
            alt="Design"
          />
          <p className="Design texto">Design</p>
        </div>

        <div>
          <div className="bottom"></div>
          <img
            src="https://www.bringit.com.br/blog/wp-content/uploads/2020/10/memoria-ram-destaque-1024x682.jpg"
            className="limpezaimg"
            alt="Memória RAM"
          />
          <p className="RAM texto">Memória RAM</p>
          <p className="esgotado">Esgotado</p>
        </div>

        <div className="card7">
          <div className="bottom"></div>
          <img
            src="https://img.odcdn.com.br/wp-content/uploads/2016/11/20161116152208.jpg"
            className="limpezaimg"
            alt="Formatação"
          />
          <p className="formatar texto">Formatação</p>
        </div>

        <div className="card8">
          <div className="bottom"></div>
          <img
            src="https://s.zst.com.br/cms-assets/2020/11/como-escolher-o-processador.jpg"
            className="limpezaimg"
            alt="Processador"
          />
          <p className="Processador texto">Processador</p>
        </div>
      </div>

      <div className="footer">
        <img src="/images/icons8-computador-64.png" className="logo" alt="Logo" />
        <img src="/images/icons8-local-48.png" className="local" alt="Local" />
        <p className="textl">Quarto: 324</p>
      </div>
    </>
  );
}

export default App;
