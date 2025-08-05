import type { Meta, StoryObj } from '@storybook/react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './select'

const meta = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-[300px]">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
          <SelectItem value="date">Date</SelectItem>
          <SelectItem value="elderberry">Elderberry</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <div className="w-[300px]">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a technology" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Frontend</SelectLabel>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="vue">Vue.js</SelectItem>
            <SelectItem value="angular">Angular</SelectItem>
            <SelectItem value="svelte">Svelte</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Backend</SelectLabel>
            <SelectItem value="node">Node.js</SelectItem>
            <SelectItem value="python">Python</SelectItem>
            <SelectItem value="java">Java</SelectItem>
            <SelectItem value="csharp">C#</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Database</SelectLabel>
            <SelectItem value="mongodb">MongoDB</SelectItem>
            <SelectItem value="postgresql">PostgreSQL</SelectItem>
            <SelectItem value="mysql">MySQL</SelectItem>
            <SelectItem value="redis">Redis</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const WithDefaultValue: Story = {
  render: () => (
    <div className="w-[300px]">
      <Select defaultValue="banana">
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
          <SelectItem value="date">Date</SelectItem>
          <SelectItem value="elderberry">Elderberry</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="w-[300px]">
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="This select is disabled" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const WithDisabledItems: Story = {
  render: () => (
    <div className="w-[300px]">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Some items are disabled" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana" disabled>Banana (Out of stock)</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
          <SelectItem value="date" disabled>Date (Out of stock)</SelectItem>
          <SelectItem value="elderberry">Elderberry</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const ManyOptions: Story = {
  render: () => (
    <div className="w-[300px]">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="afghanistan">Afghanistan</SelectItem>
          <SelectItem value="albania">Albania</SelectItem>
          <SelectItem value="algeria">Algeria</SelectItem>
          <SelectItem value="andorra">Andorra</SelectItem>
          <SelectItem value="angola">Angola</SelectItem>
          <SelectItem value="argentina">Argentina</SelectItem>
          <SelectItem value="armenia">Armenia</SelectItem>
          <SelectItem value="australia">Australia</SelectItem>
          <SelectItem value="austria">Austria</SelectItem>
          <SelectItem value="azerbaijan">Azerbaijan</SelectItem>
          <SelectItem value="bahamas">Bahamas</SelectItem>
          <SelectItem value="bahrain">Bahrain</SelectItem>
          <SelectItem value="bangladesh">Bangladesh</SelectItem>
          <SelectItem value="barbados">Barbados</SelectItem>
          <SelectItem value="belarus">Belarus</SelectItem>
          <SelectItem value="belgium">Belgium</SelectItem>
          <SelectItem value="belize">Belize</SelectItem>
          <SelectItem value="benin">Benin</SelectItem>
          <SelectItem value="bhutan">Bhutan</SelectItem>
          <SelectItem value="bolivia">Bolivia</SelectItem>
          <SelectItem value="brazil">Brazil</SelectItem>
          <SelectItem value="bulgaria">Bulgaria</SelectItem>
          <SelectItem value="canada">Canada</SelectItem>
          <SelectItem value="chile">Chile</SelectItem>
          <SelectItem value="china">China</SelectItem>
          <SelectItem value="colombia">Colombia</SelectItem>
          <SelectItem value="cuba">Cuba</SelectItem>
          <SelectItem value="denmark">Denmark</SelectItem>
          <SelectItem value="egypt">Egypt</SelectItem>
          <SelectItem value="finland">Finland</SelectItem>
          <SelectItem value="france">France</SelectItem>
          <SelectItem value="germany">Germany</SelectItem>
          <SelectItem value="greece">Greece</SelectItem>
          <SelectItem value="india">India</SelectItem>
          <SelectItem value="italy">Italy</SelectItem>
          <SelectItem value="japan">Japan</SelectItem>
          <SelectItem value="mexico">Mexico</SelectItem>
          <SelectItem value="netherlands">Netherlands</SelectItem>
          <SelectItem value="norway">Norway</SelectItem>
          <SelectItem value="poland">Poland</SelectItem>
          <SelectItem value="portugal">Portugal</SelectItem>
          <SelectItem value="russia">Russia</SelectItem>
          <SelectItem value="spain">Spain</SelectItem>
          <SelectItem value="sweden">Sweden</SelectItem>
          <SelectItem value="switzerland">Switzerland</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="usa">United States</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const Narrow: Story = {
  render: () => (
    <div className="w-[180px]">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Size" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="xs">Extra Small</SelectItem>
          <SelectItem value="sm">Small</SelectItem>
          <SelectItem value="md">Medium</SelectItem>
          <SelectItem value="lg">Large</SelectItem>
          <SelectItem value="xl">Extra Large</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const Wide: Story = {
  render: () => (
    <div className="w-[500px]">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option with a very long placeholder text" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">This is a very long option text that might wrap in narrow containers</SelectItem>
          <SelectItem value="option2">Another extremely long option with lots of descriptive text</SelectItem>
          <SelectItem value="option3">Short option</SelectItem>
          <SelectItem value="option4">Medium length option text</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const WithoutPlaceholder: Story = {
  render: () => (
    <div className="w-[300px]">
      <Select>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}