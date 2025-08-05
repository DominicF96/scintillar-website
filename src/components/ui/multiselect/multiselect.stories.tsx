import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Multiselect } from './multiselect'

const meta = {
  title: 'UI/Multiselect',
  component: Multiselect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    options: {
      control: { type: 'object' },
    },
    selected: {
      control: { type: 'object' },
    },
  },
} satisfies Meta<typeof Multiselect>

export default meta
type Story = StoryObj<typeof meta>

const sampleOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape' },
  { value: 'honeydew', label: 'Honeydew' },
]

const techOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'nuxt', label: 'Nuxt.js' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'javascript', label: 'JavaScript' },
]

// Wrapper component to handle state in stories
const MultiselectWrapper = ({ 
  options, 
  placeholder, 
  initialSelected = [] 
}: { 
  options: Array<{ value: string; label: string }>, 
  placeholder?: string,
  initialSelected?: Array<{ value: string; label: string }>
}) => {
  const [selected, setSelected] = useState(initialSelected)
  
  return (
    <div className="w-[300px]">
      <Multiselect
        options={options}
        selected={selected}
        onChange={setSelected}
        placeholder={placeholder}
      />
    </div>
  )
}

export const Default: Story = {
  render: () => (
    <MultiselectWrapper
      options={sampleOptions}
      placeholder="Select fruits..."
    />
  ),
}

export const WithPreselected: Story = {
  render: () => (
    <MultiselectWrapper
      options={sampleOptions}
      placeholder="Select fruits..."
      initialSelected={[
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
      ]}
    />
  ),
}

export const ManyOptions: Story = {
  render: () => (
    <MultiselectWrapper
      options={[...sampleOptions, ...techOptions]}
      placeholder="Select items..."
    />
  ),
}

export const TechStack: Story = {
  render: () => (
    <MultiselectWrapper
      options={techOptions}
      placeholder="Select technologies..."
      initialSelected={[
        { value: 'react', label: 'React' },
        { value: 'typescript', label: 'TypeScript' },
      ]}
    />
  ),
}

export const EmptyOptions: Story = {
  render: () => (
    <MultiselectWrapper
      options={[]}
      placeholder="No options available..."
    />
  ),
}

export const SingleOption: Story = {
  render: () => (
    <MultiselectWrapper
      options={[{ value: 'only', label: 'Only Option' }]}
      placeholder="Select option..."
    />
  ),
}

export const LongLabels: Story = {
  render: () => (
    <MultiselectWrapper
      options={[
        { value: 'long1', label: 'This is a very long option label that might wrap' },
        { value: 'long2', label: 'Another extremely long option with lots of text' },
        { value: 'short', label: 'Short' },
        { value: 'medium', label: 'Medium length option' },
      ]}
      placeholder="Select options with long labels..."
    />
  ),
}

export const Narrow: Story = {
  render: () => (
    <div className="w-[200px]">
      <Multiselect
        options={sampleOptions.slice(0, 4)}
        selected={[]}
        onChange={() => {}}
        placeholder="Narrow container..."
      />
    </div>
  ),
}

export const Wide: Story = {
  render: () => (
    <div className="w-[500px]">
      <Multiselect
        options={sampleOptions}
        selected={[sampleOptions[0], sampleOptions[1], sampleOptions[2]]}
        onChange={() => {}}
        placeholder="Wide container with selected..."
      />
    </div>
  ),
}