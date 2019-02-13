export default {
  form: `
<label class="control-label" style="">{{t(component.label)}}</label>
<table class="ui table datagrid-table 
    {{ component.striped ? 'striped' : ''}}
    {{ component.bordered ? 'celled' : ''}}
    {{ component.hover ? 'selectable' : ''}}
    {{ component.condensed ? 'compact' : 'padded'}}
    " {% if (component.layoutFixed) { %}style="table-layout: fixed;"{% } %}>
  {% if (hasHeader) { %}
  <thead>
    <tr>
      {% columns.forEach(function(col) { %}
      {% if (visibleColumns[col.key]) { %}
      <th class="{{col.validate && col.validate.required ? 'field-required' : ''}}">
        {{ col.hideLabel ? '' : t(col.label || col.title) }}
        {% if (col.tooltip) { %} <i ref="tooltip" class="{{iconClass('question-sign')}} text-muted" data-title="{{col.tooltip}}"></i>{% } %}
      </th>
      {% } %}
      {% }) %}
      {% if (hasExtraColumn) { %}
      <th>
        {% if (hasAddButton && hasTopSubmit) { %}
        <button class="ui button primary" ref="{{datagridKey}}-addRow">
          <i class="{{iconClass('plus')}}"></i> Add Another
        </button>
        {% } %}
      </th>
      {% } %}
    </tr>
  </thead>
  {% } %}
  <tbody ref="{{datagridKey}}-tbody">
    {% rows.forEach(function(row) { %}
    <tr ref="{{datagridKey}}-row">
      {% columns.forEach(function(col) { %}
      {% if (visibleColumns[col.key]) { %}
      <td ref="{{datagridKey}}">
        {{row[col.key]}}
      </td>
      {% } %}
      {% }) %}
      {% if (hasExtraColumn && hasRemoveButtons && (removePlacement === 'col')) { %}
      <td>
        <button type="button" class="ui icon button secondary" ref="{{datagridKey}}-removeRow">
          <i class="{{iconClass('remove-circle')}}"></i>
        </button>
      </td>
      {% } else if (removePlacement === 'corner') { %}
        <button type="button" tabindex="-1" class="btn-xss ui icon button secondary formio-{{ component.type }}-remove" ref="{{datagridKey}}-removeRow">
          <i class="{{ iconClass('remove') }}"></i>
        </button>
      {% } %}
    </tr>
    {% }) %}
  </tbody>
  {% if (hasAddButton && hasBottomSubmit) { %}
  <tfoot>
    <tr>
      <td colspan="{{numColumns}}">
        <button class="ui button primary" ref="{{datagridKey}}-addRow">
          <i class="{{iconClass('plus')}}"></i> {{t(component.addAnother || 'Add Another')}}
        </button>
      </td>
    </tr>
  </tfoot>
  {% } %}
</table>
`,
  html: `
<label class="control-label" style="">{{t(component.label)}}</label>
<table class="ui table datagrid-table 
    {{ component.striped ? 'striped' : ''}}
    {{ component.bordered ? 'celled' : ''}}
    {{ component.hover ? 'selectable' : ''}}
    {{ component.condensed ? 'compact' : 'padded'}}
    ">
  {% if (hasHeader) { %}
  <thead>
    <tr>
      {% columns.forEach(function(col) { %}
      {% if (visibleColumns[col.key]) { %}
      <th class="{{col.validate && col.validate.required ? 'field-required' : ''}}">
        {{ col.hideLabel ? '' : t(col.label || col.title) }}
        {% if (col.tooltip) { %} <i ref="tooltip" class="{{iconClass('question-sign')}} text-muted" data-title="{{col.tooltip}}"></i>{% } %}
      </th>
      {% } %}
      {% }) %}
    </tr>
  </thead>
  {% } %}
  <tbody>
    {% rows.forEach(function(row) { %}
    <tr>
      {% columns.forEach(function(col) { %}
      {% if (visibleColumns[col.key]) { %}
      <td ref="{{datagridKey}}">
        {{row[col.key]}}
      </td>
      {% } %}
      {% }) %}
    </tr>
    {% }) %}
  </tbody>
</table>
`,
};