import React from 'react';

import { LabelInput } from '../../core/components/inputs.jsx';

import { LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const LabelInputCode = () => (<LabelInput value={LABELS.INPUT_CODE} />)

export const LabelInputName = () => (<LabelInput value={LABELS.INPUT_NAME} />)

export const LabelInputIsIncoming = () => (<LabelInput value={LABELS.INPUT_IS_INCOMING} />)
