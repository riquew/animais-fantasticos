import ScrollSuave from "./modules/scrollSuave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import ScrollAnima from "./modules/scroll-anima.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitCoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

const modal = new Modal(
  "[data-modal='abrir']",
  "[data-modal='fechar']",
  ".modal-container"
);
modal.init();

const tolltip = new Tooltip("[data-tooltip]");
tolltip.init();

const scrollAnima = new ScrollAnima("[data-anime='scroll']");
scrollAnima.init();

const dropdownmenu = new DropdownMenu("[data-dropdown]");
dropdownmenu.init();

const menuMobile = new MenuMobile("[data-menu='button']", "[data-menu='list']");
menuMobile.init();

initFuncionamento();
fetchAnimais("../../animaisapi.json", ".numeros-grid");
fetchBitCoin("https://blockchain.info/ticker", ".btc-preco");
