import { setNodes, unwrapNodes } from '@udecode/plate-common';
import { getPlatePluginType, SPEditor } from '@udecode/plate-core';
import { Path } from 'slate';
import {
  ELEMENT_DEFAULT,
  ELEMENT_LI,
  ELEMENT_OL,
  ELEMENT_UL,
} from '../defaults';

export const unwrapList = (editor: SPEditor, { at }: { at?: Path } = {}) => {
  setNodes(
    editor,
    {
      type: getPlatePluginType(editor, ELEMENT_DEFAULT),
    },
    { at }
  );

  unwrapNodes(editor, {
    at,
    match: { type: getPlatePluginType(editor, ELEMENT_LI) },
  });

  unwrapNodes(editor, {
    at,
    match: {
      type: [
        getPlatePluginType(editor, ELEMENT_UL),
        getPlatePluginType(editor, ELEMENT_OL),
      ],
    },
    split: true,
  });
};
