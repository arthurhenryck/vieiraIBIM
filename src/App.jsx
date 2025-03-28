
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div>
    <Header/>

      <div className="baner">{/*Baner*/}
        <img src="https://manutencaocomputadores.net/wp-content/uploads/2016/09/manutencao_pcs.jpg" className="imgBaner" />
        <div className="dark"></div>
        <p className="escrBaner"> Concerto e limpeza de <br /> computadores e notbooks </p>
      </div>

      <div>{/*Cards*/}
        <div>{/*Card1*/}
          <div className="bottom"></div>
          <img src="data:image/jpeg;base64,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" className="limpezaimg" />
          <p className="Limpeza texto">Limpeza</p>
        </div>

        <div>{/*Card2*/}
          <div className="bottom"></div>
          <img src="https://s.zst.com.br/cms-assets/2021/03/backup-computador-1-.jpg" className="limpezaimg" />
          <p className="Backup texto">Backup</p>
          {/*<img src="c:\Users\Estudante\Downloads\icons8-promoção-48.png" className="promo" />*/}
        </div>

        <div>{/*Card3*/}
          <div className="bottom"></div>
          <img src="https://tm.ibxk.com.br/2012/9/materias/26420193358.jpg" className="limpezaimg" />
          <p className="Virus texto"> Remoção de Virus </p>
        </div>

        <div>{/*Card4*/}
          <div className="bottom"></div>
          <img src="https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg"
            className="limpezaimg" />
          <p className="programação texto"> Programação </p>
        </div>

        <div>{/*Card5*/}
          <div className="bottom"></div>
          <img src="https://s2-g1.glbimg.com/z7O63Q01CUicvJYsjZjVr05aRCs=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/m/D/DFYKn5QbSfiHCv21vUTA/foto-1-destaque-g1-unifor-design-grafico-e-digital.jpg"
            className="limpezaimg" />
          <p className="Design texto"> Design </p>
        </div>

        <div>{/*Card6*/}
          <div className="bottom"></div>
          <img src="https://www.bringit.com.br/blog/wp-content/uploads/2020/10/memoria-ram-destaque-1024x682.jpg"
            className="limpezaimg" />
          <p className="RAM texto"> Memoria RAM </p>
          <p className="esgotado"> Esgotado </p>
        </div>

        <div className="card7">{/*Card7*/}
          <div className="bottom"></div>
          <img src="https://img.odcdn.com.br/wp-content/uploads/2016/11/20161116152208.jpg" className="limpezaimg" />
          <p className="formatar texto"> Formatação </p>
        </div>

        <div className="card8">{/*Card8*/}
          <div className="bottom"></div>
          <img src="https://s.zst.com.br/cms-assets/2020/11/como-escolher-o-processador.jpg" className="limpezaimg" />
          <p className="Processador texto"> Processador </p>
        </div>
      </div>
      <div className="footer">
        <img src="c:\Users\Estudante\Downloads\icons8-computador-64.png" className="logo" />
        <img src="c:\Users\Estudante\Downloads\icons8-local-48.png" className="local" />
        <p className="textl"> Quarto:324</p>
        <img src="c:\Users\Estudante\Downloads\image 13.png" className="insta" />
      </div>
      </div>
    </>
  );
}

export default App;
