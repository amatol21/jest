import React, { useState } from 'react';
import './Home.scss';
import Course from '../Course/Course';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

const Home = () => {

	const [courseName, changeCourseName] = useState('');

	const setCourseName = (event) => {
		changeCourseName(event.target.value);
	}

	const coursesList = [
		{
			header: "Курс по javascript",
			description: "Далеко-далеко за словесными горами в стране гласных и 			согласных живут рыбные тексты. Буквоград, алфавит грамматики! Залетают они моей подпоясал безорфографичный над пунктуация собрал наш реторический, рекламных если единственное о но обеспечивает предупредила путь необходимыми...",
			authors: ['Сергей Иванов', 'Иван Сергеев'],
			time: "44 ч. 37 мин."
		},
		{
			header: "Python за 3 мес.",
			description: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Свой рот использовало, алфавит, свою возвращайся своих грустный коварных составитель живет грамматики переписывается...",
			authors: ['Анна Осадчая', 'Денис Петров'],
			time: "57 ч. 21 мин."
		},
		{
			header: "Курс по C++",
			description: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Злых семантика сих силуэт толку буквоград продолжил если наш...",
			authors: ['Иван Дронов', 'Денис Вышкин'],
			time: "49 ч. 11 мин."
		}
	]


	return (
		<main className="main">
			<div className="main__content cover line">
				<h1 className="main__header">Список курсов</h1>
				<form action="#" className="search line">
					<Input style={{ marginRight: '1rem', width: '35rem' }} placeholder="Название курса" value={courseName} onChange={setCourseName} />
					<Button text="Искать" style={{ marginRight: '2rem' }} />
					<Button text="Получить курсы" style={{ marginRight: '2rem' }} />
				</form>


				<Button style={{ marginRight: '1.5rem' }} text="Добавить курс" />
				<Button text="Загрузить" />

				<ul className="result">
					{coursesList.map((elem) => {
						return (
							<Course key={elem.header} header={elem.header} description={elem.description} authors={elem.authors} time={elem.time} />
						)
					}
					)}

				</ul>
			</div>
		</main>
	)
}

export default Home;

