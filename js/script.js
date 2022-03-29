

const header = document.querySelector('.header');

const burger = header.querySelector('.burger');
const mobileMenu = header.querySelector('.mobile-menu');
const mobileMenuRemoveButton = header.querySelector('.mobile-menu__remove');
const filterHeader = header.querySelector('.filter-header');
const filterButton = header.querySelector('.filter-header__button');
const mobileFilter = header.querySelector('.mobile-filter');
const filterRemoveButton = header.querySelector('.mobile-filter__remove');
const filterRadio = header.querySelectorAll('.mobile-filter__radio');
const filterLabel = header.querySelectorAll('.mobile-filter__label');
const filterName = header.querySelector('.filter-header__name');


// Функция открытия - закрытия мобильного меню
const createMenuControl = () => {
	burger.addEventListener('click', () => {
		mobileMenu.classList.remove('hidden');
		filterHeader.classList.remove('hidden');
	});
	mobileMenuRemoveButton.addEventListener('click', () => {
		mobileMenu.classList.add('hidden');
		filterHeader.classList.add('hidden');
	});
};


// Фуекция открытия - закрытия мобильного фильтра
const createfilterControl = () => {
	filterButton.addEventListener('click', () => {
		mobileMenu.classList.add('hidden');
		filterHeader.classList.add('hidden');
		mobileFilter.classList.remove('hidden');
	});

	filterRemoveButton.addEventListener('click', () => {
		mobileFilter.classList.add('hidden');
		mobileMenu.classList.remove('hidden');
		filterHeader.classList.remove('hidden');
	});
};

// функция синхронизации выбора фильра и названия фильтра
const giveFilterName = () => {
	filterRadio.forEach(item => {
		item.addEventListener('change', () => {
			filterRadio.forEach((item, index) => {
				if (item.checked) {
					filterName.textContent = filterLabel[index].textContent;
				}
			});
		});
	});
};


createMenuControl();
createfilterControl();
giveFilterName();





