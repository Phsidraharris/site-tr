Feature: CarouselDisplay

    Scenario: User navigates to CarouselDisplay
        Given I am a User loading CarouselDisplay
        When I navigate to the CarouselDisplay
        Then CarouselDisplay will load with out errors
        And User list data load with out errors
        And I can leave the screen with out errors

    Scenario: User actions on carousel images
        Given I am a User loading the CarouselDisplay   
        When I navigate to the CarouselDisplay
        Then I can click on first image to trigger handleGoToSlide
        Then I can click on back button to trigger toggleFullCarousel
        Then I can click on second image to trigger handleGoToSlide
        Then I can click on back button to trigger toggleFullCarousel
        Then I can click on third image to trigger handleGoToSlide

    Scenario: Share and Location function will work properly
        Given I am a User loading the CarouselDisplay
        When I navigate to the CarouselDisplay
        Then I click on share btn
        Then I click on location btn

    Scenario: Video carousel will perform operations
        Given I am a User loading the CarouselDisplay
        When I navigate to the CarouselDisplay
        Then I click on video screen
        Then I click on video
        Then Video will end
        Then Carousel will change