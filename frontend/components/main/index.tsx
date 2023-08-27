import styles from "./main.module.css"
import Block from "./components/block"
import Label from "./components/Label"
import { useEffect, useState } from "react"

const readData = [{ title: "prize", showInput: true, buttonText: "Read" }]
const writeData = [
	{ title: "bet", showInput: false, buttonText: "Send" },
	{ title: "betMany", showInput: true, buttonText: "Send" },
	{ title: "closeLottery", showInput: false, buttonText: "Send" },
	{ title: "openBets", showInput: true, buttonText: "Send" },
	{ title: "ownerWithdraw", showInput: true, buttonText: "Send" },
	{ title: "prizeWithdraw", showInput: true, buttonText: "Send" },
	{ title: "purchaseTokens", showInput: true, buttonText: "Send" },
	{ title: "renounceOwnership", showInput: false, buttonText: "Send" },
	{ title: "returnTokens", showInput: true, buttonText: "Send" },
	{ title: "transferOwnership", showInput: true, buttonText: "Send" },
]

const variablesNames = [
	"betFee",
	"betPrice",
	"betsClosingTime",
	"getRandomNumber",
	"owner",
	"ownerPool",
	"paymentToken",
	"prizePool",
	"purchaseRatio",
]

export default function Main() {
	return (
		<div className={styles.mainContainer}>
			<LeftPart />
			<RightPart />
		</div>
	)
}

function LeftPart() {
	const [variablesList, setVariablesList] = useState(new Map())

	useEffect(() => {
		// TODO: set values of public variable here from contract
		variablesNames.forEach((variable) => {
			variablesList.set(variable, null)
		})

		setVariablesList(variablesList)
	}, [])

	function getVariablesListUI() {
		const variablesListUI = []
		variablesList.forEach((key, value) => {
			variablesListUI.push(
				<div className={styles.variable_container}>
					<div className={styles.title_container}>
						<div className={styles.variable_name}>{key}</div>
						<input type="text" value="Refresh" />
					</div>
					<div className={styles.variable_value}>{value}</div>
				</div>
			)
		})

		return variablesListUI
	}

	return (
		<div className={styles.left_container}>
			<div className={styles.contract_info}></div>
			<div className={styles.public_variables}>{getVariablesListUI()}</div>
		</div>
	)
}

function RightPart() {
	return (
		<div className={styles.right_container}>
			<section className={styles.read_section}>
				<Label title="Read" />
				<div className={styles.block_container}>
					{readData.map(({ title, showInput, buttonText }) => (
						<Block title={title} buttonText={buttonText} showInput={showInput} showEndBreak={false} />
					))}
				</div>
			</section>
			<section className={styles.write_section}>
				<Label title="Write" />
				<div className={styles.block_container}>
					{writeData.map(({ title, showInput, buttonText }) => (
						<Block title={title} buttonText={buttonText} showInput={showInput} />
					))}
				</div>
			</section>
		</div>
	)
}
