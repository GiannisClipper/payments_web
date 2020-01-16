import React from 'react';

import { LabelInput } from '../../core/components/inputs.jsx';

import { LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const LabelInputDate = () => (<LabelInput value={LABELS.INPUT_DATE} />)

export const LabelInputIncoming = () => (<LabelInput value={LABELS.INPUT_INCOMING} />)

export const LabelInputOutgoing = () => (<LabelInput value={LABELS.INPUT_OUTGOING} />)

export const LabelInputRemarks = () => (<LabelInput value={LABELS.INPUT_REMARKS} />)
