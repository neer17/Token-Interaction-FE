import styles from "./components.module.css"

export default function Block({ buttonText = "Send", showInput, title, showEndBreak = true }) {
	return (
		<div className={styles.block_container}>
			<div className={styles.title}>{title}</div>
			{showInput && (
				<div className={styles.input_container}>
					<input className={styles.block_input} type="text" name="input-1" id="input-1" />
				</div>
			)}
			<div className={styles.button_container}>
				<input className={styles.send_btn} type="button" value={buttonText} />
			</div>

      {showEndBreak && (
        <div className={styles.end_break}></div>
      )}
		</div>
	)
}
