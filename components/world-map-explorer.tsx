'use client';

import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  NativeSelect,
  NativeSelectOption,
} from '@/components/ui/native-select';
import {
  pilgrimMapLinks,
  worldLocations,
  type WorldLocation,
} from '@/lib/world-locations';

function LoreContent({
  location,
  compact = false,
}: {
  location: WorldLocation;
  compact?: boolean;
}) {
  return (
    <>
      <div className="world-lore-heading">
        <p className="world-lore-kicker">{location.category}</p>
        <h2>{location.name}</h2>
        <span aria-hidden="true" />
      </div>
      <div className="world-lore-block">
        <h3>The place</h3>
        <p>{location.place}</p>
      </div>
      <div className="world-lore-block">
        <h3>People &amp; culture</h3>
        <p>{location.people}</p>
      </div>
      {!compact && (
        <p className="world-lore-source">In the books: {location.sources}</p>
      )}
    </>
  );
}

export function WorldMapExplorer() {
  const [selectedId, setSelectedId] = useState('ilvaren');
  const [previewId, setPreviewId] = useState<string | null>(null);
  const [mobileVisible, setMobileVisible] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(true);

  const locationsById = useMemo(
    () => new Map(worldLocations.map((location) => [location.id, location])),
    [],
  );
  const displayed =
    locationsById.get(previewId ?? selectedId) ?? worldLocations[0];

  useEffect(() => {
    const selectFromHash = () => {
      const id = window.location.hash.slice(1);
      if (locationsById.has(id)) setSelectedId(id);
    };

    selectFromHash();
    window.addEventListener('hashchange', selectFromHash);
    return () => window.removeEventListener('hashchange', selectFromHash);
  }, [locationsById]);

  const commitLocation = (id: string) => {
    setSelectedId(id);
    setPreviewId(null);
    setMobileVisible(true);
    setMobileExpanded(true);
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <div className="world-explorer">
      <div className="world-map-boundary">
        <figure className="world-map-stage" aria-describedby="world-map-help">
          <Image
            src="/assets/world-map.png"
            alt="Map of The Broken Year"
            width={1025}
            height={1535}
            sizes="(max-width: 820px) calc(100vw - 36px), (max-width: 1120px) 62vw, 850px"
          />
          <figcaption className="sr-only" id="world-map-help">
            Interactive map. Hover, focus, or select a location name to read
            about the place and its culture. Pilgrim names open the Pilgrims
            guide.
          </figcaption>
          {worldLocations.map((location) => {
            const isDisplayed = displayed.id === location.id;
            const isSelected = selectedId === location.id;
            const style = {
              left: `${location.x}%`,
              top: `${location.y}%`,
              width: `${location.width}%`,
              height: `${location.height}%`,
            } as CSSProperties;

            return (
              <button
                type="button"
                className={`world-hotspot world-hotspot--${location.labelSize ?? 'standard'}${isDisplayed ? ' is-active' : ''}${isSelected ? ' is-selected' : ''}`}
                style={style}
                key={location.id}
                aria-label={`Explore ${location.name}`}
                aria-pressed={isSelected}
                aria-controls="world-lore-panel"
                onMouseEnter={() => setPreviewId(location.id)}
                onMouseLeave={() => setPreviewId(null)}
                onFocus={() => setPreviewId(location.id)}
                onBlur={() => setPreviewId(null)}
                onClick={() => commitLocation(location.id)}
              >
                {location.labelLines.map((line, index) => (
                  <span
                    className={
                      index > 0 && location.id === 'brackwater'
                        ? 'world-hotspot-subline'
                        : undefined
                    }
                    key={line}
                  >
                    {line}
                  </span>
                ))}
              </button>
            );
          })}
          {pilgrimMapLinks.map((pilgrim) => {
            const style = {
              left: `${pilgrim.x}%`,
              top: `${pilgrim.y}%`,
              width: `${pilgrim.width}%`,
              height: `${pilgrim.height}%`,
            } as CSSProperties;

            return (
              <Link
                className="world-hotspot world-hotspot--standard world-hotspot--pilgrim"
                style={style}
                href={`/pilgrims#${pilgrim.id}`}
                aria-label={`Explore ${pilgrim.name} on the Pilgrims page`}
                key={pilgrim.id}
              >
                {pilgrim.labelLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </Link>
            );
          })}
        </figure>

        <aside className="world-lore-panel" id="world-lore-panel">
          <label
            className="world-location-label"
            htmlFor="world-location-picker"
          >
            Choose a geographic location
          </label>
          <NativeSelect
            className="world-location-picker"
            id="world-location-picker"
            value={selectedId}
            onChange={(event) => commitLocation(event.target.value)}
          >
            {worldLocations.map((location) => (
              <NativeSelectOption value={location.id} key={location.id}>
                {location.name}
              </NativeSelectOption>
            ))}
          </NativeSelect>
          <LoreContent location={displayed} />
        </aside>
      </div>

      <details className="world-text-index">
        <summary>Explore the locations as a list</summary>
        <div className="world-text-index-grid">
          {worldLocations.map((location) => (
            <button
              type="button"
              className={selectedId === location.id ? 'is-active' : undefined}
              onClick={() => commitLocation(location.id)}
              key={location.id}
            >
              <span>{location.name}</span>
              <small>{location.category}</small>
            </button>
          ))}
        </div>
      </details>

      <aside
        className={`world-mobile-lore${mobileVisible ? ' is-visible' : ''}${mobileExpanded ? ' is-expanded' : ''}`}
        aria-label={`${displayed.name} details`}
      >
        <div className="world-mobile-lore-bar">
          <button
            type="button"
            className="world-mobile-lore-toggle"
            aria-expanded={mobileExpanded}
            onClick={() => setMobileExpanded((expanded) => !expanded)}
          >
            <span>{displayed.name}</span>
            <small>{mobileExpanded ? 'Hide details' : 'Show details'}</small>
          </button>
          <button
            type="button"
            className="world-mobile-lore-close"
            aria-label="Close location details"
            onClick={() => setMobileVisible(false)}
          >
            ×
          </button>
        </div>
        <div className="world-mobile-lore-body">
          <LoreContent location={displayed} compact />
        </div>
      </aside>
    </div>
  );
}
