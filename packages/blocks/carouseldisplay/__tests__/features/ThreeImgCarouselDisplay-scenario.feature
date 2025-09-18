Feature: ThreeImgCarouselDisplay

    Scenario: User navigates to ThreeImgCarouselDisplay
        Given I am a User loading ThreeImgCarouselDisplay
        When I navigate to the ThreeImgCarouselDisplay
        Then ThreeImgCarouselDisplay will load with out errors

    Scenario: User will click share and location buttons
        Given I am a User loading ThreeImgCarouselDisplay
        When I navigate to the ThreeImgCarouselDisplay
        Then I will click on share and location buttons