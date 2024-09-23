import stylesCommon from './../../RandomKeys.module.css'
import cn from 'classnames'
import { useAppSelector } from "../../../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../../../constants"
import { IPlaygroundStepsState } from "../../../../store/types"
import { IMapArrowCodes } from "../../../../types"

import styles from "./RandomArrows.module.css"
const RandomArrows: React.FC = () => {
  const state = useAppSelector((state) => state.playground.steps)

  const getStylesRandomKeys = (step: IPlaygroundStepsState): string => {
    return cn(step.success && step.success !== null && styles.iconSuccess,
        step.success === false && step.success !== null && styles.iconUnsuccess,
        stylesCommon.icon
    )
  //   if (step.success && step.success !== null) {
  //     return cn(stylesCommon.icon, styles.iconSuccess)
  //   }
  //   if (step.success === false && step.success !== null) {
  //     return cn(stylesCommon.icon, styles.iconUnsuccess)
  //   }
  //   return stylesCommon.icon
   }

  return (
    <div className={stylesCommon.wrapper}>
      {state.map((step) => {
        return (
          <span key={step.step} className={getStylesRandomKeys(step)}>
            {MAP_ARROW_CODES[step.currentValue as keyof IMapArrowCodes]}
          </span>
        )
      })}
    </div>
  )
}

export default RandomArrows
