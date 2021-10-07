<?php

return [
    'feeds' => [
      'ro'=>[
        /*
             * Here you can specify which class and method will return
             * the items that should appear in the feed. For example:
             * 'App\Model@getAllFeedItems'
             *
             * You can also pass an argument to that method:
             * ['App\Model@getAllFeedItems', 'argument']
             */
        'items' => ['App\Model\Article@getFeedItems','argument'=>'ro'],

        /*
         * The feed will be available on this url.
         */
        'url' => env('APP_URL').'/ro/feed',

        'title' => 'My feed',
        'description' => 'The description of the feed.',
        'language' => 'en-US',

        /*
         * The view that will render the feed.
         */
        'view' => 'feed::atom',

        /*
         * The type to be used in the <link> tag
         */
        'type' => 'application/atom+xml',
      ],
      'ru'=>[
        /*
             * Here you can specify which class and method will return
             * the items that should appear in the feed. For example:
             * 'App\Model@getAllFeedItems'
             *
             * You can also pass an argument to that method:
             * ['App\Model@getAllFeedItems', 'argument']
             */
        'items' => '',

        /*
         * The feed will be available on this url.
         */
        'url' => '',

        'title' => 'My feed',
        'description' => 'The description of the feed.',
        'language' => 'en-US',

        /*
         * The view that will render the feed.
         */
        'view' => 'feed::atom',

        /*
         * The type to be used in the <link> tag
         */
        'type' => 'application/atom+xml',
      ],
      'en'=>[
        /*
             * Here you can specify which class and method will return
             * the items that should appear in the feed. For example:
             * 'App\Model@getAllFeedItems'
             *
             * You can also pass an argument to that method:
             * ['App\Model@getAllFeedItems', 'argument']
             */
        'items' => '',

        /*
         * The feed will be available on this url.
         */
        'url' => '',

        'title' => 'My feed',
        'description' => 'The description of the feed.',
        'language' => 'en-US',

        /*
         * The view that will render the feed.
         */
        'view' => 'feed::atom',

        /*
         * The type to be used in the <link> tag
         */
        'type' => 'application/atom+xml',
      ],
        'main' => [
            /*
             * Here you can specify which class and method will return
             * the items that should appear in the feed. For example:
             * 'App\Model@getAllFeedItems'
             *
             * You can also pass an argument to that method:
             * ['App\Model@getAllFeedItems', 'argument']
             */
            'items' => '',

            /*
             * The feed will be available on this url.
             */
            'url' => '',

            'title' => 'My feed',
            'description' => 'The description of the feed.',
            'language' => 'en-US',

            /*
             * The view that will render the feed.
             */
            'view' => 'feed::atom',

            /*
             * The type to be used in the <link> tag
             */
            'type' => 'application/atom+xml',
        ],
    ],
];
