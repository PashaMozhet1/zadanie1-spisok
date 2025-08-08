// import './style.css';
import { useState } from 'react';
import styles from './style.module.css';
// import { now } from 'moment';
// import './App.css';

// console.log(promptValue);

export function App() {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const onInputButtonClick = () => {
		const promptValue = prompt();
		console.log(promptValue);
		setValue(promptValue);

		if (promptValue.length >= 3) {
			setValue(promptValue);
			setError('');
		} else {
			setError('Введенное значение должно содержать минимум 3 символа');
		}
	};

	let isValidValue;
	if (value.length >= 3) {
		isValidValue = true;
	} else {
		isValidValue = false;
	}

	const onAddButtonClick = () => {
		if (isValidValue == true) {
			const id = Date.now();
			const updatedList = [...list, { id, value }];
			// list.push(value);
			setList(updatedList);
			setValue('');
			setError('');
		}
	};

	let isListEmpty;
	if (list.length > 0) {
		isListEmpty = false;
	} else {
		isListEmpty = true;
	}

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "<output className={styles['current-value']}>{value}</output>"
			</p>
			{error !== '' && <div className={styles.error}>{error}</div>}
			<div className={styles['buttons-container']}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button className={styles.button} onClick={onAddButtonClick} disabled={!isValidValue}>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{isListEmpty && <p className={styles['no-margin-text']}>Нет добавленных элементов</p>}
				<ul className={styles.list}>
					{list.map(({ id, value }) => (
						<li className={styles['list-item']} key={id}>
							{value}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
