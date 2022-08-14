import React from 'react'
import 'rc-dialog/assets/index.css'
import NDialog, { DialogProps } from 'rc-dialog'

const Dialog: React.FC<DialogProps> = props => <NDialog {...props} mask />

export default Dialog
