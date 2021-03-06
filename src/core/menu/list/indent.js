import $ from 'shared/dom';
import Base from 'base/base';
import { searchNode } from 'shared/node';

class Indent extends Base {
  constructor(editor) {
    super(editor, 'indent', true);
  }

  // 点击菜单按钮事件
  click() {
    const edit = this.editor;
    const { selection, code, menu } = edit;
    // 如果是源代码
    if (code) {
      return;
    }
    searchNode(selection.getSelElem()[0], 'P', (elem) => {
      const $selectionElem = $(elem);
      if ($selectionElem.length) {
        const indent = $selectionElem.css('text-indent');
        edit.undo.push(edit.getHtml());
        $selectionElem.css('text-indent', indent === '0px' ? '2em' : '0');
        // 整体检测按钮状态
        menu.testActive();
      }
    });
  }

  // 是否是选中
  isActive() {
    const { cfg, type, editor } = this;
    const $item = $(`#${cfg.prefix}${type}${editor.uid}`);
    const className = `${cfg.prefix}menu-link-active`;
    const $selectionElem = editor.selection.getSelElem();
    let status = false;

    if ($selectionElem && $selectionElem.length) {
      status = $selectionElem.css('text-indent') === '0px';
      if (status) {
        $item.removeClass(className);
      } else {
        $item.addClass(className);
      }
    }

    return status;
  }
}

export default Indent;
