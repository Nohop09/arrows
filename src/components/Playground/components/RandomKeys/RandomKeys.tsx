import RandomArrows from "./components/RandomArrows"
import { useAppSelector } from "../../../../app/hooks"
import WelcomeText from "./components/WelcomeText"
import { TypographyHeader } from "../../../UI_KIT"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = (props) => {
  const { isTimerActive } = props
  const state = useAppSelector((state) => state.playground.steps)

  return (
    <div>
      <TypographyHeader>Random keys</TypographyHeader>
      {state.length === 0 ? (
        <WelcomeText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows />
      )}
    </div>
  )
}
export default RandomKeys
