import Loader from '@/app/components/shared/loader'
import { render, screen } from '@testing-library/react';

describe('Loader', () => {
  describe('Text', () => {
    it('Get text' , () => {
      render(
        <Loader />
      )
      expect(screen.getByText('Loading')).toBeInTheDocument()
    })
    it('Get image' , () => {
      render(
        <Loader />
      )
      const testImageLoading = document.querySelector("img") as HTMLImageElement;
      expect(testImageLoading.alt).toContain("Loading Data")
    })
    it('Get className loader' , () => {
      render(
        <Loader />
      )
      const loaderElement = document.querySelector('.loader') as HTMLDivElement
      expect(loaderElement.className).toContain("loader")
    })
    it('Get className loading text' , () => {
      render(
        <Loader />
      )
      const loadingTextElement = document.querySelector('h2') as HTMLElement

      expect(loadingTextElement.className).toContain("text-light")
    })
    it(" If there h2 element" , () => {
      render(
        <Loader />
      )
      const h2Element = document.querySelector('h2') as HTMLElement
      expect(h2Element).toBeTruthy()
    })
  })
})