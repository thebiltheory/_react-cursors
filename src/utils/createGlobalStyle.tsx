import React from 'react'

export default function createGlobalStyle(string: TemplateStringsArray) {
  return () => <style type='text/css'>{string}</style>
}
