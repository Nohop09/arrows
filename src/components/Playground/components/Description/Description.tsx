// import styles from "./Description.module.css"

import { TypographyText } from "../../../UI_KIT"
import { TypographyHeader } from "../../../UI_KIT/TypographyHeader"

export interface IDescriptionProps {
    //
}

const Description: React.FC<IDescriptionProps> = (props) => {
    const {} = props

    return <>
      <TypographyHeader>↑↓→← Arrow-game description</TypographyHeader>

      <TypographyText>
        Player's goal is to press the keyboard arrow key that was shown to him
        before the next one appears.
      </TypographyText>

      <TypographyText>
        After three consecutive successful hits - game won, after three errors -
        lost.
      </TypographyText>
    </>
}

export default Description
