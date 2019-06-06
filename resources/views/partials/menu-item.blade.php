@if (is_string($item))
    <li class="header">{{ $item }}</li>
@else
    <li class="{{ $item['class'] }}">
        <a href="{{ $item['href'] }}"
           @if (isset($item['target'])) target="{{ $item['target'] }}" @endif
        >
            <i class="fa fa-fw fa-{{ isset($item['icon']) ? $item['icon'] : 'circle-o' }} {{ isset($item['icon_color']) ? 'text-' . $item['icon_color'] : '' }}"></i>
            <span>@lang($item['text'])</span>
            @if (isset($item['labels']))

                <span class="pull-right-container">
                @foreach ($item['labels'] as $label)
                        <span class="label label-{{ isset($label['label_color']) ? $label['label_color'] : 'primary' }} pull-right">{{ $label['label'] }}</span>

                @endforeach
                     </span>
            @elseif (isset($item['submenu']))
                <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
                </span>
            @endif
        </a>
        @if (isset($item['submenu']))
            <ul class="{{ $item['submenu_class'] }}">
                @each('partials.menu-item', $item['submenu'], 'item')
            </ul>
        @endif
    </li>
@endif
