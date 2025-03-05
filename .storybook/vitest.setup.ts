import { beforeAll } from 'vitest'
import { setProjectAnnotations } from '@storybook/react'
import projectAnnotations from './preview'

const annotations = setProjectAnnotations(projectAnnotations)
beforeAll(annotations.beforeAll)
