import React from 'react';

import { LABELS } from '../constants.js';

import { LabelInput } from '../../core/components/inputs.jsx';

// --- --- --- --- --- --- --- --- ---

export const LabelInputUsername = () => (<LabelInput value={LABELS.INPUT_USERNAME} />)

export const LabelInputPassword = () => (<LabelInput value={LABELS.INPUT_PASSWORD} />)

export const LabelInputPassword2 = () => (<LabelInput value={LABELS.INPUT_PASSWORD2} />)

export const LabelInputEmail = () => (<LabelInput value={LABELS.INPUT_EMAIL} />)
