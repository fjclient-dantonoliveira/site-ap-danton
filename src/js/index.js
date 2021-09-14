/**
 * NAV MENU TOPO E PRIMEIRA TELA
 */

const burger = document.querySelector('#burger');
const menuWrapper = document.querySelector('#menuWrapper');

const slideMenu = (element) => {
  if (!menuWrapper.style.height || menuWrapper.style.height == '0px') {
    element.style.height = `${element.scrollHeight}px`;
  } else {
    element.style.height = '0px';
  }
}

burger.addEventListener("click", function () {
  slideMenu(menuWrapper);
});

// substituir min-h-screen 
const inicio = document.querySelector('#inicio');
inicio.style.height = `${window.innerHeight}px`;
inicio.style.minHeight = '550px';


/**
 * DESTAQUES
 */

const destaques = document.querySelectorAll('.destaques-option');
const destaqueLazer = document.querySelector('#destaques-lazer');
const destaqueApartamento = document.querySelector('#destaques-apartamento');
const destaqueEmpreendimento = document.querySelector('#destaques-empreendimento');

destaques.forEach((destaque) => {
  destaque.addEventListener('click', (e) => {
    e.preventDefault();

    destaques.forEach((destaque) => {
      destaque.classList.remove('destaque-ativo');
      destaque.classList.add('hover:bg-black'); 
      destaque.classList.add('hover:bg-opacity-10');
    });
    destaque.classList.add('destaque-ativo');
    destaque.classList.remove('hover:bg-black');
    destaque.classList.remove('hover:bg-opacity-10');

    destaqueLazer.classList.add('hidden');
    destaqueEmpreendimento.classList.add('hidden');
    destaqueApartamento.classList.add('hidden');
    if (destaque.textContent == 'Lazer') {
      destaqueLazer.classList.remove('hidden');
    } else if (destaque.textContent == 'Apartamento') {
      destaqueApartamento.classList.remove('hidden');
    } else {
      destaqueEmpreendimento.classList.remove('hidden');
    }
  })
});


/**
 * DESTAQUES SLIDER
 */

let slides = document.getElementsByClassName("slide");
const dots = document.querySelectorAll('.dot');
let slideIndex = 0;
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

showSlides(slideIndex);

btnNext.addEventListener('click', () => {
  showSlides(slideIndex += 1);
});

btnPrev.addEventListener('click', () => {
  showSlides(slideIndex -= 1);
});

function currentSlide(n) {
  showSlides(slideIndex = n);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlides(slideIndex = index);
  });
});

function showSlides(n) {
  if (n >= slides.length) {slideIndex = 0}    
  if (n < 0) {slideIndex = slides.length - 1}
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add('hidden'); 
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  slides[slideIndex].classList.remove('hidden');
  dots[slideIndex].classList.add('active');
}

setInterval(() => {
  btnNext.click();
}, 5000);



/**
 * PLANTAS SLIDER
 */
const planta1 = document.getElementById('planta-jd');
const planta2 = document.getElementById('planta-tradicional');
const btnPPrev = document.querySelector('.btn-pprev');
const btnPNext = document.querySelector('.btn-pnext');

btnPNext.addEventListener('click', () => {
  planta1.classList.add('hidden');
  planta2.classList.remove('hidden');
  btnPNext.classList.add('hidden');
  btnPPrev.classList.remove('hidden');
});

btnPPrev.addEventListener('click', () => {
  planta2.classList.add('hidden');
  planta1.classList.remove('hidden');
  btnPPrev.classList.add('hidden');
  btnPNext.classList.remove('hidden');
});


/**
 * DATA
 */

const lazerList = [
  ['Salão de Jogos', 'M6 1l1.172.203c-.356 2.245.791 2.519 2.697 2.874 1.469.273 3.131.622 3.131 3.284v.639h-1.183v-.639c0-1.556-.479-1.809-2.163-2.122-2.584-.48-4.097-1.391-3.654-4.239zm15.563 9.38c-.202-.811-.931-1.38-1.767-1.38h-15.592c-.836 0-1.565.569-1.768 1.38-.146.603-2.436 9.824-2.436 10.377 0 1.379 1.094 2.243 2.286 2.243.633 0 1.263-.274 1.83-.781 3.591-3.208 3.77-4.219 4.759-4.219h6.264c.971 0 1.163 1.018 4.745 4.219.567.507 1.197.781 1.83.781 1.192 0 2.286-.864 2.286-2.243 0-.553-2.29-9.774-2.437-10.377zm-12.563 3.62h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm4 1h-2v-1h2v1zm2.75-.75c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm1.75 1.75c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm0-3.531c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm1.734 1.781c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75z'],
  ['Brinquedoteca', 'M2.479 18c.978 0 1.309-.524 1.708-.922.813-.816 1.813-.469 1.813.847v6.075h6.075c1.315 0 1.663-1 .847-1.813-.398-.399-.922-.73-.922-1.708 0-1.087 1.108-2.479 3-2.479s3 1.392 3 2.479c0 .978-.524 1.309-.922 1.708-.816.813-.469 1.813.847 1.813h6.075v-6.075c0-1.315-1-1.663-1.813-.847-.399.398-.73.922-1.708.922-1.087 0-2.479-1.108-2.479-3s1.392-3 2.479-3c.978 0 1.309.524 1.708.922.813.816 1.813.469 1.813-.847v-6.075h-6.075c-1.315 0-1.663-1-.847-1.813.398-.399.922-.73.922-1.708 0-1.087-1.108-2.479-3-2.479s-3 1.392-3 2.479c0 .978.524 1.309.922 1.708.816.813.469 1.813-.847 1.813h-6.075v6.075c0 1.315-1 1.663-1.813.847-.399-.398-.73-.922-1.708-.922-1.087 0-2.479 1.108-2.479 3s1.392 3 2.479 3z'],
  ['Salão de Festas', 'M18.028 24h-.018c-.268 0-.49-.213-.499-.483-.05-1.462.19-2.847 2.265-3.08.795-.089.858-.367.996-.977.229-1.008.607-1.922 2.701-2.032.285-.02.512.197.526.473.014.276-.197.512-.473.526-1.512.079-1.618.547-1.778 1.254-.152.667-.359 1.581-1.861 1.751-1.016.113-1.432.423-1.377 2.051.01.276-.207.507-.482.517zm-8.342-18.714c.241.213.53.366.842.444l3.566.896c.3.076.617.051.903-.07 1.082-.461 3.862-1.684 5.062-2.155.76-.299 1.268.63.655 1.097-1.39 1.062-5.714 4.086-5.714 4.086l-.862 3.648s1.785 1.86 2.544 2.7c.423.469.696.919.421 1.595-.481 1.181-1.457 3.477-1.908 4.547-.255.605-1.164.453-1.015-.322.217-1.128.781-4.016.781-4.016l-3.558-1.62s-.253 5.953-.327 7.296c-.019.341-.253.589-.582.588-.249-.001-.508-.173-.612-.596-.534-2.178-2.142-8.99-2.142-8.99-.209-.837-.329-1.53-.053-2.564l.915-3.85s-2.726-3.984-3.709-5.476c-.402-.611.356-1.18.808-.78l3.985 3.542zm-7.178 8.489l-.853.511 2.708 4.524c-1.788.306-2.917 1.904-2.048 3.356.537.897 1.753 1.106 2.622.586 1.034-.619 1.774-1.952.979-3.284l-3.408-5.693zm17.721-5.193l.904 1.669 1.867.344-1.308 1.376.249 1.882-1.712-.819-1.713.819.25-1.882-1.309-1.376 1.867-.344.905-1.669zm-17.298-2.935l-2.934 2.935 2.934 2.935 2.935-2.935-2.935-2.935zm9.055-5.398c1.36-.626 2.972-.03 3.597 1.33.626 1.36.03 2.972-1.33 3.598-1.36.625-2.972.029-3.598-1.331-.625-1.36-.029-2.972 1.331-3.597z'],
  ['Espaço Gourmet', 'M9 19.5l-.012-4.5h2.012l1 4.5 1-4.5h2.037l-.037 4.5 2-4.5h3l-3.556 9h-8.888l-3.556-9h3l2 4.5zm10.941-5.5h-15.878s-1.059-.64-1.059-2.154c0-1.853 1.612-3.156 3.176-3.231.77 1.469 3.117 2.435 5.293 2.154-2.507-.558-5.692-3.718-3.9-6.21 1.272-1.77 4.473-1.486 3.9-4.559 2.131.589 3.43 2.167 3.176 4.308h.002c2.104-.101 3.867 1.3 3.173 4.307 1.754 0 3.176 1.447 3.176 3.231 0 1.328-1.051 2.148-1.059 2.154z'],
  ['Churrasqueira Dupla', 'M19 24h-14v-2h14v2zm-10-24c.542 6.292-5 8.458-5 14 0 3.764 3.084 6.42 6.594 7.005-1.094-1.755-.073-4.286 1.406-5.693 1.531 1.469 2.344 4.156 1.281 5.688 3.868-.75 6.719-3.858 6.719-7.833 0-3.625-1.833-7.042-5.291-9.167.822 2.281-.271 4.365-1.334 5.083.063-2.921-1-7.255-4.375-9.083z'],
  ['Piscina Adulto e Infantil', 'M12 16c2.947 0 5.333-2.365 5.333-5.284 0-2.917-2.087-5.918-5.333-10.716-3.246 4.798-5.332 7.799-5.332 10.716 0 2.919 2.385 5.284 5.332 5.284zm-.018-12.587c.311.484.685 1.325.685 2.213 0 2.606-2.667 3.033-2.667 1.447 0-1.088 1.326-2.696 1.982-3.66zm.018 16.587c-2.367 0-5.711-.614-7.285-2.356.473-.294 1.15-.61 2.021-.889.923.589 2.702 1.245 5.264 1.245s4.341-.656 5.265-1.245c.87.278 1.548.595 2.022.889-1.574 1.742-4.92 2.356-7.287 2.356zm11.997-2c0 3.313-5.37 6-11.997 6-6.625 0-11.997-2.687-11.997-6l.003-.126c.043-1.009.615-1.921 1.505-2.398s1.965-.448 2.829.074l.023.014c-1.513.763-2.361 1.678-2.361 2.436 0 1.631 3.895 4 9.998 4s9.998-2.369 9.998-4c0-.757-.847-1.671-2.358-2.436l.021-.012c.877-.529 1.969-.548 2.864-.052s1.458 1.434 1.472 2.458v.042zm-4.999-4.031c1.453-1.406 3.064-.182 4.402-1.477.418-.403.603-.902.603-1.384 0-1.279-1.481-2.261-3.021-1.436-1.234.661-1.921 2.349-1.984 4.297zm.178-5.067c.63-1.037 1.749-.57 2.329-1.524.688-1.133-.729-2.29-1.829-1.269-.615.57-.76 1.654-.5 2.793zm-16.153.77c-1.539-.825-3.021.157-3.021 1.436 0 .482.185.98.602 1.384 1.338 1.295 2.95.071 4.402 1.477-.062-1.948-.748-3.636-1.983-4.297zm1.307-3.563c-1.1-1.021-2.518.136-1.83 1.269.58.954 1.699.487 2.33 1.524.259-1.139.115-2.223-.5-2.793z'],
  ['Deck Molhado', 'M6 24h-6v-24h6v24zm9-24h-6v24h6v-24zm9 0h-6v24h6v-24z'],
  ['Playground', 'M2.982 17.341l6.746 3.914-.455.79c-.694 1.206-1.989 1.955-3.379 1.955-.682 0-1.355-.181-1.947-.524-1.248-.723-1.947-2.039-1.947-3.39 0-.661.168-1.331.52-1.943l.462-.802zm7.849-14.993l-4.31 13.598 6.11-12.372 2.999-.387 1.14 2.735-7.653 11.499 9.693-10.591 3.083.35.107 4.178-11.274 8.163v.001l-6.756-3.92 1.327-13.938 3.563-1.664 1.971 2.348z'],
  ['Quadra de Areia', 'M22.856 6.912c-1.36 5.26-6.115 9.959-12.541 12.443.977 1.273 4.071 3.382 5.837 3.892 4.578-1.691 7.848-6.081 7.848-11.247 0-1.821-.418-3.542-1.144-5.088m-15.224 6.699c.119 1.538.613 2.921 1.355 4.094 6.817-2.445 11.584-7.587 12.474-13.067-.824-1.058-1.818-1.975-2.946-2.706-1.437 6.91-7.647 10.345-10.883 11.679m-2.045-1.045c-1.216-1.41-2.604-2.484-5.347-2.96-.157.774-.24 1.574-.24 2.394 0 6.628 5.372 12 12 12 .496 0 .981-.039 1.461-.097-3.253-1.323-8.032-5.669-7.874-11.337m1.78-1.022c1.209-.534 2.74-1.34 4.222-2.485-2.185-2.84-5.239-4.997-8.252-5.349-1.085 1.133-1.946 2.478-2.522 3.968 3.384.647 5.127 2.152 6.552 3.866m-2.356-9.285c1.969-1.416 4.378-2.259 6.989-2.259 1.647 0 3.216.333 4.645.934-.45 2.861-1.835 5.102-3.537 6.793-2.105-2.675-5.203-4.78-8.097-5.468'],
  ['Pet Place', 'M11.954 11c3.33 0 7.057 6.123 7.632 8.716.575 2.594-.996 4.729-3.484 4.112-1.092-.271-3.252-1.307-4.102-1.291-.925.016-2.379.836-3.587 1.252-2.657.916-4.717-1.283-4.01-4.073.774-3.051 4.48-8.716 7.551-8.716zm10.793-4.39c1.188.539 1.629 2.82.894 5.27-.704 2.341-2.33 3.806-4.556 2.796-1.931-.877-2.158-3.178-.894-5.27 1.274-2.107 3.367-3.336 4.556-2.796zm-21.968.706c-1.044.729-1.06 2.996.082 5.215 1.092 2.12 2.913 3.236 4.868 1.87 1.696-1.185 1.504-3.433-.082-5.215-1.596-1.793-3.824-2.599-4.868-1.87zm15.643-7.292c1.323.251 2.321 2.428 2.182 5.062-.134 2.517-1.405 4.382-3.882 3.912-2.149-.407-2.938-2.657-2.181-5.061.761-2.421 2.559-4.164 3.881-3.913zm-10.295.058c-1.268.451-1.92 2.756-1.377 5.337.519 2.467 2.062 4.114 4.437 3.269 2.06-.732 2.494-3.077 1.377-5.336-1.125-2.276-3.169-3.721-4.437-3.27z'],
  ['Jardim Digital', 'M13.001 24h-2v-5h-7.001l4-6h-3l4-6h-2l5.001-7 4.999 7h-2l4 6h-3l4 6h-6.999v5z'],
  ['Car Wash', 'M21.739 10.921c-1.347-.39-1.885-.538-3.552-.921 0 0-2.379-2.359-2.832-2.816-.568-.572-1.043-1.184-2.949-1.184h-7.894c-.511 0-.736.547-.07 1-.742.602-1.619 1.38-2.258 2.027-1.435 1.455-2.184 2.385-2.184 4.255 0 1.76 1.042 3.718 3.174 3.718h.01c.413 1.162 1.512 2 2.816 2 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2s2.403-.838 2.816-2h.685c1.994 0 2.5-1.776 2.5-3.165 0-2.041-1.123-2.584-2.261-2.914zm-15.739 6.279c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm3.576-6.2c-1.071 0-3.5-.106-5.219-.75.578-.75.998-1.222 1.27-1.536.318-.368.873-.714 1.561-.714h2.388v3zm1-3h1.835c.882 0 1.428.493 2.022 1.105.452.466 1.732 1.895 1.732 1.895h-5.588v-3zm7.424 9.2c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2z']
];

let strLazer = '';
for (let i = 0; i < lazerList.length; i++) {
  strLazer += `
    <li>
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 inline" viewBox="0 0 24 24"><path d="${lazerList[i][1]}"/></svg>
    <span class="align-middle">${lazerList[i][0]}</span>
    </li>
  `;
};

const ulLazer = document.querySelector('.lazer-list');
ulLazer.innerHTML = strLazer;

const apartamentoList = [
  ['2 Dormitórios', 'M24 19v-7h-23v-7h-1v14h1v-2h22v2h1zm-20-12c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm19 4c0-1.657-1.343-3-3-3h-13v3h16z'],
  ['Piso Laminado nas Áreas Secas', 'M6 24h-6v-24h6v24zm9-24h-6v24h6v-24zm9 0h-6v24h6v-24z'],
  ['Piso Cerâmico na Cozinha e Banheiro', 'M11 11h-11v-11h11v11zm13 0h-11v-11h11v11zm-13 13h-11v-11h11v11zm13 0h-11v-11h11v11z'],
  ['Revestimento até o Teto', 'M10 18v5h-10v-5h10zm10 0v5h-9v-5h9zm4-6v5h-7v-5h7zm-17 0v5h-7v-5h7zm9 0v5h-8v-5h8zm-6-6v5h-10v-5h10zm10 0v5h-9v-5h9zm-13-5v4h-7v-4h7zm8 0v4h-7v-4h7z'],
  ['Cozinha', 'M18.496 24h-.001c-.715 0-1.5-.569-1.5-1.5v-8.5s-1.172-.003-2.467 0c.802-6.996 3.103-14 4.66-14 .447 0 .804.357.807.851.01 1.395.003 16.612.001 21.649 0 .828-.672 1.5-1.5 1.5zm-11.505-12.449c0-.691-.433-.917-1.377-1.673-.697-.56-1.177-1.433-1.088-2.322.252-2.537.862-7.575.862-7.575h.6v6h1.003l.223-6h.607l.173 6h1.003l.242-6h.562l.199 6h1.003v-6h.549s.674 5.005.951 7.55c.098.902-.409 1.792-1.122 2.356-.949.751-1.381.967-1.381 1.669v10.925c0 .828-.673 1.5-1.505 1.5-.831 0-1.504-.672-1.504-1.5v-10.93z'],
  ['Sala de Estar', 'M22 4v12h-20v-12h20zm2-2h-24v16h24v-16zm-17 18c1 1.194 2.862 2 5 2s4-.806 5-2h-10z'],
  ['Área de Serviço', 'M12 0c-4.87 7.197-8 11.699-8 16.075 0 4.378 3.579 7.925 8 7.925s8-3.547 8-7.925c0-4.376-3.13-8.878-8-16.075zm-.027 5.12c.467.725 1.027 1.987 1.027 3.32 0 3.908-4 4.548-4 2.17 0-1.633 1.988-4.044 2.973-5.49z'],
  ['Banheiro', 'M4.558 7l4.701-4.702c.199-.198.46-.298.721-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26h-2.883zm12.001 0h2.883l-4.701-4.702c-.199-.198-.46-.298-.721-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm-16.559 2v2h.643c.534 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.233-.481.722-.786 1.256-.786h.642v-2h-24z'],
  ['Opções de Planta com Jardim', 'M1 15c4.075-1.121 9.51.505 11 6 1.985-5.939 7.953-7.051 11-6-2.467 1.524-3.497 9-11 9s-8.487-7.471-11-9zm8.203-12.081c.008-1.612 1.319-2.919 2.933-2.919 1.615 0 2.926 1.307 2.934 2.919 1.4-.799 3.187-.317 3.995 1.081.807 1.398.331 3.187-1.062 4 1.393.813 1.869 2.602 1.062 4-.808 1.398-2.595 1.88-3.995 1.081-.008 1.612-1.319 2.919-2.934 2.919-1.614 0-2.925-1.307-2.933-2.919-1.4.799-3.188.317-3.995-1.081-.807-1.398-.331-3.187 1.062-4-1.393-.813-1.869-2.602-1.062-4 .807-1.398 2.595-1.88 3.995-1.081zm2.797 2.581c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z']
];

let strApartamento = '';
for (let i = 0; i < apartamentoList.length; i++) {
  strApartamento += `
    <li>
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 inline" viewBox="0 0 24 24"><path d="${apartamentoList[i][1]}"/></svg>
    <span class="align-middle">${apartamentoList[i][0]}</span>
    </li>
  `;
};

const ulApartamento = document.querySelector('.apartamento-list');
ulApartamento.innerHTML = strApartamento;

const empreendimentoList = [
  ['Lazer Entregue Equipado e Decorado', 'M9.408 9.14c-.036 1.615 4.452 1.618 4.397 0v-.957c-.131-1.527-4.271-1.536-4.384-.001h-.013v.958zm2.212-1.381c.764 0 1.385.256 1.385.57s-.621.57-1.385.57-1.385-.256-1.385-.57.621-.57 1.385-.57zm6.785-1.051v-.957c-.132-1.527-4.271-1.536-4.384-.001h-.014v.958c-.035 1.616 4.453 1.619 4.398 0zm-3.57-.81c0-.314.621-.57 1.385-.57s1.385.256 1.385.57c0 .314-.621.57-1.385.57s-1.385-.256-1.385-.57zm8.165.244v12.185l-11 5.673v-12.14l9.864-5.19-10.367-5.517-10.331 5.453 9.834 5.23v12.164l-11-5.674v-12.248l.009.005-.009-.019 11.5-6.064 11.5 6.142zm-18.188-.392h-.014v.958c-.036 1.615 4.451 1.618 4.397 0v-.957c-.131-1.527-4.271-1.535-4.383-.001zm3.583.147c0 .314-.621.571-1.385.571-.765 0-1.385-.256-1.385-.571 0-.314.62-.57 1.385-.57.763 0 1.385.256 1.385.57zm5.411-1.491v-.957c-.132-1.528-4.271-1.536-4.384-.001h-.014v.958c-.036 1.615 4.453 1.618 4.398 0zm-2.185-1.381c.763 0 1.385.256 1.385.57s-.622.571-1.385.571c-.765 0-1.385-.256-1.385-.571s.62-.57 1.385-.57z'],
  ['Iluminação de LED', 'M14 19h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 2h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-4.5l1.188.782c.154.138.38.218.615.218h.895c.234 0 .461-.08.615-.218l1.187-.782zm3.75-13.799c0 3.569-3.214 5.983-3.214 8.799h-5.572c0-2.816-3.214-5.23-3.214-8.799 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.051 6.003 5.772zm4-.691v1.372h-2.538c.02-.223.038-.448.038-.681 0-.237-.017-.464-.035-.69h2.535zm-10.648-6.553v-1.957h1.371v1.964c-.242-.022-.484-.035-.726-.035-.215 0-.43.01-.645.028zm-3.743 1.294l-1.04-1.94 1.208-.648 1.037 1.933c-.418.181-.822.401-1.205.655zm10.586 1.735l1.942-1.394.799 1.115-2.054 1.473c-.191-.43-.423-.827-.687-1.194zm-3.01-2.389l1.038-1.934 1.208.648-1.041 1.941c-.382-.254-.786-.473-1.205-.655zm-10.068 3.583l-2.054-1.472.799-1.115 1.942 1.393c-.264.366-.495.763-.687 1.194zm13.707 6.223l2.354.954-.514 1.271-2.425-.982c.21-.397.408-.812.585-1.243zm-13.108 1.155l-2.356 1.06-.562-1.251 2.34-1.052c.173.433.371.845.578 1.243zm-1.178-3.676h-2.538v-1.372h2.535c-.018.226-.035.454-.035.691 0 .233.018.458.038.681z'],
  ['Infraestrutura de Água e Gás Individualizados', 'M16 6c-3.652 5.397-6 8.774-6 12.056 0 3.283 2.684 5.944 6 5.944s6-2.661 6-5.944c0-3.282-2.348-6.659-6-12.056zm-.021 3.84c.351.543.771 1.49.771 2.49 0 2.931-3 3.411-3 1.627 0-1.224 1.492-3.033 2.229-4.117zm-7.975 8.16c.021-3.273 1.818-6.373 4.648-10.61-1.047-2.069-2.64-4.417-4.652-7.39-3.652 5.397-6 8.774-6 12.056 0 3.283 2.684 5.944 6 5.944h.004zm-2.254-10.042c0-1.225 1.492-3.033 2.229-4.118.351.543.771 1.49.771 2.49 0 2.931-3 3.411-3 1.628z'],
  ['Fiação 100% Subterrânea', 'M8 24l3-9h-9l14-15-3 9h9l-14 15z'],
  ['Pintura nas Fachadas em Grafiato', 'M24 19.007c0-3.167-1.409-6.771-2.835-9.301l-.006-.01-.014-.026c-.732-1.392-1.914-3.052-3.619-4.757-2.976-2.976-5.476-3.912-6.785-3.913-.413 0-.708.094-.859.245l-.654.654c-1.898-.236-3.42.105-4.294.982-.876.875-1.164 2.159-.792 3.524.242.893.807 1.891 1.752 2.836.867.867 2.062 1.684 3.615 2.327.488-.839 1.654-1.019 2.359-.315.586.586.584 1.533-.002 2.119s-1.533.589-2.121 0c-.229-.229-.366-.515-.416-.812-1.646-.657-3.066-1.534-4.144-2.612-.728-.728-1.289-1.528-1.664-2.349l-2.835 2.832c-.445.447-.685 1.064-.686 1.82.001 1.635 1.122 3.915 3.714 6.506 2.764 2.764 5.58 4.243 7.431 4.243.649 0 1.181-.195 1.548-.562l8.086-8.079c.911.875-.777 3.541-.777 4.65 0 1.104.896 1.999 2 1.998 1.104 0 1.998-.895 1.998-2zm-18.912-12.974c-.236-.978-.05-1.845.554-2.444.526-.53 1.471-.791 2.656-.761l-3.21 3.205zm9.138 2.341l-.03-.029c-1.29-1.291-3.802-4.354-3.095-5.062.715-.715 3.488 1.521 5.062 3.095.862.863 2.088 2.248 2.938 3.459-1.718-1.073-3.493-1.469-4.875-1.463zm-3.875 12.348c-.547-.082-1.5-.547-1.9-.928l7.086-7.086c.351.37 1.264.931 1.753 1.075l-6.939 6.939z'],
  ['Sistema Inteligente de Interfonia', 'M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z'],
  ['Wi-Fi nas Áreas de Lazer', 'M8.213 16.984c.97-1.028 2.308-1.664 3.787-1.664s2.817.636 3.787 1.664l-3.787 4.016-3.787-4.016zm-1.747-1.854c1.417-1.502 3.373-2.431 5.534-2.431s4.118.929 5.534 2.431l2.33-2.472c-2.012-2.134-4.793-3.454-7.864-3.454s-5.852 1.32-7.864 3.455l2.33 2.471zm-4.078-4.325c2.46-2.609 5.859-4.222 9.612-4.222s7.152 1.613 9.612 4.222l2.388-2.533c-3.071-3.257-7.313-5.272-12-5.272s-8.929 2.015-12 5.272l2.388 2.533z'],
  ['Som Ambiente no Espaço Gourmet e Salão de Festas', 'M23 0l-15.996 3.585v13.04c-2.979-.589-6.004 1.671-6.004 4.154 0 2.137 1.671 3.221 3.485 3.221 2.155 0 4.512-1.528 4.515-4.638v-10.9l12-2.459v8.624c-2.975-.587-6 1.664-6 4.141 0 2.143 1.715 3.232 3.521 3.232 2.14 0 4.476-1.526 4.479-4.636v-17.364z'],
  ['Estacionamento', 'M19.688 4.176c0 .82-.603 1.109-1.423 1.109h-.509v-2.178h.704c.775 0 1.228.283 1.228 1.069zm4.312-1.884v6.417c0 1.265-1.026 2.291-2.292 2.291h-6.417c-1.265 0-2.291-1.026-2.291-2.292v-6.416c0-1.266 1.026-2.292 2.292-2.292h6.417c1.265 0 2.291 1.026 2.291 2.292zm-2.75 1.829c0-.759-.231-1.33-.691-1.713-.461-.383-1.134-.574-2.019-.574h-2.331v7.333h1.547v-2.609h.664c.905 0 1.603-.209 2.094-.627.49-.418.736-1.021.736-1.81zm-18.548 5.879h-2.202c-.276 0-.5.224-.5.5v.511c0 .793.926.989 1.616.989l1.086-2zm19.08 2.993l-.074.007h-6.417c-5.448 0-8.12-.359-10.233-1.027 0 0 .74-1.826 1.631-3.142.202-.298.515-.502.869-.566 1.186-.213 2.261-.31 3.442-.343v-1.908c-1.432.03-2.601.127-3.851.351-1.016.182-1.45.507-2.278 1.889-1.078 1.799-2.101 3.715-2.929 5.252-.639 1.186-.946 2.252-.946 3.666 0 1.37.397 2.533 1.005 3.981v1.847c0 .552.448 1 1 1h1.5c.552 0 1-.448 1-1v-1h13v1c0 .552.448 1 1 1h1.499c.552 0 1-.448 1-1v-1.847c.608-1.448 1.005-2.611 1.005-3.981 0-1.414-.307-2.48-.946-3.666l-.277-.513zm-17.282 5.007c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm11 0h-7c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h7c.276 0 .5.224.5.5s-.224.5-.5.5zm4 0c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z'],
  ['Empresa de Segurança 24h', 'M20.377 11.082c-.06 1.929-2.229 3.126-8.409 3.126-6.193 0-8.358-1.203-8.409-3.139 1.508 0 4.379-1.958 8.409-1.958 3.927-.001 7.144 1.971 8.409 1.971zm-8.408 4.09c-2.062 0-3.74-.131-5.078-.397.062.555.469 3.322 2.409 3.322 1.721 0 1.673-1.316 2.721-1.316 1.047 0 1.169 1.316 2.852 1.316 2.09 0 2.46-3.063 2.494-3.389-1.387.311-3.169.464-5.398.464zm6.405-.741c-.04 2.171-.717 4.769-2.28 6.437-1.048 1.119-2.377 1.687-3.949 1.687-1.575 0-2.898-.533-3.931-1.582-1.646-1.673-2.302-4.345-2.396-6.461-.523-.158-1.01-.347-1.484-.628-.016 2.472.704 5.942 2.821 8.094 1.321 1.341 3 2.022 4.99 2.022 1.972 0 3.712-.745 5.033-2.153 2.131-2.273 2.76-5.679 2.661-8.111-.459.308-.944.521-1.465.695zm-6.237-10.984l-.313.623-.701.1.507.485-.119.685.626-.324.627.324-.12-.685.507-.485-.7-.1-.314-.623zm7.211-.206s-2.537-.686-7.348-3.241c-4.812 2.555-7.348 3.241-7.348 3.241s-1.295 2.4-3.652 5.016l2.266 1.908c1.533-.165 4.64-2.082 8.734-2.082s7.201 1.917 8.734 2.083l2.266-1.909c-2.357-2.616-3.652-5.016-3.652-5.016zm-6.345 3.214c-.526.131-.605.188-.875.402-.269-.214-.349-.271-.875-.402-.731-.183-1.151-.656-1.151-1.299 0-.359.147-.691.318-1.146.192-.513.083-.675-.119-.882l-.171-.176.987-.819c.098.098.235.278.486.278.248 0 .416-.175.528-.271.102.09.268.271.523.271.248 0 .381-.171.49-.281l.983.823-.172.176c-.202.207-.311.369-.119.882.17.455.318.786.318 1.146 0 .641-.42 1.115-1.151 1.298z']
];

let strEmpreendimento = '';
for (let i = 0; i < empreendimentoList.length; i++) {
  strEmpreendimento += `
    <li>
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 inline" viewBox="0 0 24 24"><path d="${empreendimentoList[i][1]}"/></svg>
    <span class="align-middle">${empreendimentoList[i][0]}</span>
    </li>
  `;
};

const ulEmpreendimento = document.querySelector('.empreendimento-list');
ulEmpreendimento.innerHTML = strEmpreendimento;