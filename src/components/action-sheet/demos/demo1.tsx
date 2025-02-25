import React, { useState, useRef } from 'react'
import { ActionSheet, Button, Dialog, Space, Toast } from 'antd-mobile'
import { DemoBlock } from 'demos'
import type {
  Action,
  ActionSheetRef,
} from 'antd-mobile/es/components/action-sheet'

const actions: Action[] = [
  { text: '复制', key: 'copy' },
  { text: '修改', key: 'edit' },
  { text: '删除', key: 'delete' },
]

// 基础用法
function Basic() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button onClick={() => setVisible(true)}>最简单的用法</Button>
      <ActionSheet
        visible={visible}
        actions={actions}
        onClose={() => setVisible(false)}
      />
    </>
  )
}

function WithCancelButtonAndDescription() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button onClick={() => setVisible(true)}>取消按钮和额外描述</Button>
      <ActionSheet
        extra='请选择你要进行的操作'
        cancelText='取消'
        visible={visible}
        actions={actions}
        onClose={() => setVisible(false)}
      />
    </>
  )
}

// 选项状态
function ConfigActions() {
  const actions: Action[] = [
    { text: '复制', key: 'copy' },
    { text: '修改', key: 'edit', disabled: true },
    {
      text: '删除',
      key: 'delete',
      description: '删除后数据不可恢复',
      danger: true,
    },
  ]

  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button onClick={() => setVisible(true)}>禁用和危险的选项</Button>
      <ActionSheet
        visible={visible}
        actions={actions}
        onClose={() => setVisible(false)}
      />
    </>
  )
}

// 事件处理
function Events() {
  const actions: Action[] = [
    { text: '复制', key: 'copy' },
    { text: '修改', key: 'edit' },
    {
      text: '删除',
      key: 'delete',
      onClick: async () => {
        const result = await Dialog.confirm({ content: '确定要删除吗？' })
        if (result) {
          Toast.show('执行了删除操作')
        }
      },
    },
  ]

  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button onClick={() => setVisible(true)}>事件处理</Button>
      <ActionSheet
        visible={visible}
        actions={actions}
        onClose={() => setVisible(false)}
        onAction={action => {
          if (action.key === 'edit' || action.key === 'copy') {
            Toast.show(`点击了${action.text}`)
          }
        }}
        afterClose={() => {
          Toast.show('动作面板已关闭')
        }}
      />
    </>
  )
}

// 指令式
function Imperative() {
  const handler = useRef<ActionSheetRef>()
  const actions: Action[] = [
    {
      text: '复制',
      key: 'copy',
    },
    {
      text: '修改',
      key: 'edit',
      onClick: () => {
        handler.current?.close()
      },
    },
  ]

  return (
    <Button
      onClick={() => {
        handler.current = ActionSheet.show({
          actions,
          onClose: () => {
            Toast.show('动作面板关闭')
          },
        })
      }}
    >
      显示
    </Button>
  )
}

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Space wrap>
          <Basic />
          <WithCancelButtonAndDescription />
        </Space>
      </DemoBlock>

      <DemoBlock title='选项状态'>
        <ConfigActions />
      </DemoBlock>

      <DemoBlock title='事件处理'>
        <Events />
      </DemoBlock>

      <DemoBlock title='指令式'>
        <Imperative />
      </DemoBlock>
    </>
  )
}
